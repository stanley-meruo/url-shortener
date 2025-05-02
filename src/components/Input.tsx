"use client";

import { useState, ChangeEvent } from "react";
import Button from "./Button";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";
import Link from "next/link";

interface ShortenedResult {
  originalUrl: string;
  shortUrl: string;
}

export default function Input() {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [shortenedResults, setShortenedResults] = useState<ShortenedResult[]>(
    []
  );
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const API_KEY = process.env.NEXT_PUBLIC_TINYURL_API_KEY as string;

  async function handleClick(): Promise<void> {
    if (loading) return;
    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
      setError("Please enter a URL!");
      return;
    }

    // Prevent duplicate entries
    if (shortenedResults.some((result) => result.originalUrl === trimmedUrl)) {
      toast.error("This URL has already been shortened.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://api.tinyurl.com/create", {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: trimmedUrl }),
      });

      const data = await res.json();

      if (data?.data?.tiny_url) {
        const newResult: ShortenedResult = {
          originalUrl: trimmedUrl,
          shortUrl: data.data.tiny_url,
        };

        setShortenedResults((prev) => [newResult, ...prev].slice(0, 3));
        toast.success("URL has been shortened.");
        setUrl("");
      } else {
        const errorMessage =
          data?.errors?.[0]?.message || "Invalid response from API";
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again!");
      toast.error("Failed to shorten URL.");
    } finally {
      setLoading(false);
    }
  }

  function handleCopy(link: string): void {
    if (link) {
      navigator.clipboard.writeText(link);
      toast.success("Shortened URL copied to clipboard!");

      setCopied((prev) => ({
        ...prev,
        [link]: true,
      }));

      setTimeout(() => {
        setCopied({});
      }, 2500);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setUrl(e.target.value);
  }

  return (
    <main className="bg-gray-100">
      <main className="text-lg p-5 xs:px-6 sm:px-8 lg:px-14 lg:py-12 xl:px-20 xxl:px-36">
        <section className="grid gap-4 rounded-xl p-5 -mt-24 bg-darkviolet bg-[url('/bg-shorten-mobile.svg')] bg-no-repeat bg-right-top xs:p-6 xs:-mt-26 sm:p-8 sm:-mt-28 md:h-34 md:flex md:justify-between md:-mt-22 md:p-10 lg:-mt-32 lg:p-12 lg:h-36 lg:bg-[url('/bg-shorten-desktop.svg')] lg:bg-cover lg:bg-no-repeat xl:p-14 xl:h-40">
          <div className="md:w-full">
            <input
              type="text"
              value={url}
              onChange={handleChange}
              placeholder="Shorten a link here..."
              className={`w-full rounded-lg p-3 focus:outline-none bg-white md:h-13 ${
                error ? "border-3 border-red-400" : ""
              }`}
            />
            {error && (
              <span className="text-red-400 text-sm mt-1 italic animate-pulse">
                {error}
              </span>
            )}
          </div>

          <Button
            onClick={handleClick}
            className="py-3 bg-cyan text-white font-semibold rounded-lg hover:opacity-50 cursor-pointer md:w-1/2 md:h-13 lg:w-2/5"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-1">
                <FaSpinner className="size-6 animate-spin" />
                Loading...
              </span>
            ) : (
              "Shorten it!"
            )}
          </Button>
        </section>

        <section className="my-8">
          {shortenedResults.length > 0 && (
            <div className="grid gap-6">
              {shortenedResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg grid gap-1 py-2 lg:flex lg:justify-between lg:items-center"
                >
                  <span className="px-5 py-3 truncate lg:w-[450px] xl:w-[600px]">
                    {result.originalUrl}
                  </span>
                  <div className="h-[0.5px] w-full bg-gray-400 block lg:hidden"></div>
                  <div className="grid gap-2 px-5 py-3 sm:flex sm:items-center sm:justify-between md:py-2 lg:w-[450px]">
                    <Link
                      href={result.shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan break-all w-full truncate lg:ml-4"
                    >
                      {result.shortUrl}
                    </Link>
                    <Button
                      onClick={() => handleCopy(result.shortUrl)}
                      className={`flex items-center justify-center gap-2 px-4 py-2 font-semibold rounded-md w-full transition-all duration-300 sm:w-1/4 lg:w-2/5 ${
                        copied[result.shortUrl]
                          ? "bg-darkviolet text-white"
                          : "bg-cyan text-white hover:opacity-50"
                      }`}
                    >
                      {copied[result.shortUrl] ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </main>
  );
}
