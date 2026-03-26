import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Tips",
  description:
    "Event planning tips, catering guides, and industry insights from the Venturas Catering team.",
};

const posts = [
  {
    slug: "corporate-catering-tips",
    title: "10 Tips for Planning a Corporate Lunch Event in KL",
    excerpt: "From venue selection to dietary requirements — what every event manager should know before booking catering.",
    category: "Corporate",
    date: "March 2026",
  },
  {
    slug: "wedding-catering-guide",
    title: "The Ultimate Wedding Catering Guide for Malaysian Couples",
    excerpt: "How to choose the right menu, manage guest dietary needs, and avoid the most common catering mistakes.",
    category: "Wedding",
    date: "February 2026",
  },
  {
    slug: "halal-catering-malaysia",
    title: "Why Halal Certification Matters for Your Event",
    excerpt: "Understanding Halal standards and how Venturas ensures compliance at every event.",
    category: "Industry",
    date: "January 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1e] mb-4">
            Blog & Event Tips
          </h1>
          <p className="text-[#6b6560] max-w-xl mx-auto">
            Insights, guides, and inspiration from our event specialists.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-stone-200 p-7 hover:border-[#b8932a] hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-[#b8932a] bg-[#b8932a]/10 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-[#6b6560]">{post.date}</span>
              </div>
              <h2 className="font-serif text-xl font-bold text-[#1c1c1e] mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#b8932a] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-[#6b6560] text-sm leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
