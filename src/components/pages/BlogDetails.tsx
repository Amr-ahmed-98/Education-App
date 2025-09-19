import * as icons from "@/assets/icons/icons";
import * as images from "@/assets/images/images";
import { themes } from "@/contexts/Theme";
import { ThemeContext } from "@/contexts/ThemeContextDefinition";
import { useContext } from "react";
// import { useTranslation } from "react-i18next";

function BlogDetails() {
  // const { t } = useTranslation();
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === themes.dark;

  return (
    // <div className="w-full mx-auto flex justify-center items-center">
    <div className="container flex flex-col justify-center py-10 lg:flex-row gap-2">
      {/* Main Content */}
      <section className="space-y-6 rounded-lg p-4 max-md:p-0">
        {/* Blog Title & Info */}
        <div className="flex gap-4 relative left-0 mt-5 mb-10">
          <span className="text-[#62748E]">Home</span>
          <icons.ChevronRight
            className="text-[#62748E] relative top-1"
            size={20}
          />
          <span className="text-[#62748E]">Blog</span>
          <icons.ChevronRight
            className="text-[#62748E] relative top-1"
            size={20}
          />
          <span className="font-semibold text-[#314158]">
            Become a Better Blogger...
          </span>
        </div>

        <div
          className={`flex flex-col gap-10 shadow-md py-8 px-4 rounded-2xl ${
            isDark ? `bg-[#1C242F]` : `bg-[#ffffff]`
          }`}
        >
          {/* title */}
          <div className="">
            <div className="mb-5 rounded-full w-fit">
              <span
                className={`w-fit py-1 px-2 rounded-full text-[#0069A8] font-bold text-sm
                    ${isDark ? `bg-[#21324B]` : `bg-[#DFF2FE]`}`}
              >
                DEVELOPER
              </span>
            </div>

            <h1 className="mb-2">
              <h1 className="text-5xl font-bold -tracking-[.03em]">
                Become a Better Blogger: The
              </h1>
              <span className="text-5xl">
                Ultimate Guide to Content Planning
              </span>
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mt-8">
              <img src={images.jandoe2} alt="About Jane Doe" />
              <span className={isDark ? `text-[#64748B]` : `text-[#314158]`}>
                Jane Doe
              </span>

              <p className="flex items-center gap-2">
                <icons.Calendar size={15} color="#62748E" /> Nov 10, 2023
              </p>

              <p className="flex items-center gap-2">
                <icons.Clock size={15} color="#62748E" />8 min read
              </p>
            </div>
          </div>

          {/* Blog Main Image */}
          <div className="flex ">
            <img
              src={images.ideas}
              alt="blog list main image"
              className="w-full rounded-lg "
            />
          </div>

          {/* Blog Content text > 2 images > text */}
          <div className="prose prose-invert max-w-none text-lg">
            <p>
              In the sprawling universe of the internet, content is king. But
              without a strategic plan, even the most brilliant ideas can get
              lost in the noise. This guide will walk you through the art and
              science of content planning, helping you create a roadmap to
              consistent, high-quality, and engaging blog posts that resonate
              with your audience.
            </p>
            <br />

            <h2 className="text-lg">The Complete Curricula</h2>
            <p>
              A well-structured content plan is much like a course curriculum.
              It needs a logical flow, clear objectives, and modules that build
              upon each other. Think of your blog as an educational journey for
              your reader. What do you want them to learn, and in what order?
              Breaking down your core topics into smaller, digestible posts is
              the first step toward building a content empire.
            </p>
            <p>
              Effective content planning transforms your blog from a simple
              collection of posts into a powerful resource and a magnet for your
              target audience.
            </p>
            <br />
            <h2 className="text-lg">Finding Your Intrinsic Motivation</h2>
            <p>
              Before diving into calendars and keyword tools, it's crucial to
              connect with your 'why'. What drives you to share your knowledge?
              Authentic passion is palpable and will sustain you through the
              inevitable creative lulls. Understanding your motivation also
              helps in defining your unique voice and perspective, which are
              your greatest assets in a crowded digital landscape.
            </p>

            {/* 2 Images Side by Side */}
            <div className="flex gap-2 my-8 justify-between">
              <img
                src={images.student}
                alt="sub image 1"
                className="w-[48%] rounded-lg"
              />
              <img
                src={images.tablet}
                alt="sub image 2"
                className="w-[48%] rounded-lg"
              />
            </div>

            <h2 className="text-lg">Crafting the Content Calendar</h2>
            <p>
              Your content calendar is your command center. It’s where strategy
              meets execution. Here's a simple framework to get started: <br />
              <strong>
                Monthly Themes: Assign a broad topic for each month.
                <br />
                Weekly Sub-Topics: Break down the monthly theme into specific
                blog post ideas.
                <br />
                Key Details: For each post, note the target keyword, CTA,
                required visuals, and publication
              </strong>
              <br />
              date.
            </p>
            <p>
              <strong>
                Promotion Checklist: Plan how you'll distribute the content
                (social media, newsletter, etc.).
              </strong>
              <br />
              Tools like Trello, Asana, Notion, or even a simple Google Sheet
              can be incredibly effective for managing your calendar. The key is
              to find a system that works for you and stick to it.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-3 mt-0">
            <hr className="mb-5" />
            <h2 className="text-[#62748E] font-bold tracking-[.15em]">TAGS</h2>
            <div className="flex flex-wrap gap-2">
              <span
                className={`px-3 rounded-full text-md text-[#45556C] ${
                  isDark && "py-1 bg-[#F1F5F9] text-[#45556C]"
                }`}
              >
                Technology
              </span>
              <span
                className={`px-3 rounded-full text-md text-[#45556C] ${
                  isDark && "py-1 bg-[#F1F5F9] text-[#45556C]"
                }`}
              >
                Planning
              </span>
              <span
                className={`px-3 rounded-full text-md text-[#45556C] ${
                  isDark && "py-1 bg-[#F1F5F9] text-[#45556C]"
                }`}
              >
                SEO
              </span>
              <span
                className={`px-3 rounded-full text-md text-[#45556C] ${
                  isDark && "py-1 bg-[#F1F5F9] text-[#45556C]"
                }`}
              >
                Marketing
              </span>
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////// */}

        {/* Author Box */}
        <div
          className={`flex p-4 rounded-lg shadow-md gap-4 ${
            isDark && "bg-[#1C242F]"
          }`}
        >
          <img
            src={images.janeDoe}
            alt="About Jane Doe"
            className="w-[80px] h-[80px]"
          />
          <div>
            <h3 className="font-bold text-lg mb-2">About Jane Doe</h3>
            <p className={`text-sm ${isDark && "text-[#BBBBBB]"}`}>
              Jane is a senior content strategist at EduHub with over 10 years
              of experience in digital marketing and education technology. She
              is passionate about helping creators build impactful online
              platforms.
            </p>
            <span className="flex gap-10 mt-4">
              <icons.Twitter style={{ color: "#62748E" }} />
              <icons.Globe style={{ color: "#62748E" }} />
            </span>
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <section className="space-y-6 mt-25 max-md:flex max-md:flex-col max-md:w-full max-lg:text-center max-md:justify-center">
        {/* Search */}
        <div
          className={`py-4 px-6 rounded-2xl shadow-md ${
            isDark && `bg-[#1C242F]`
          }`}
        >
          <h3 className="font-semibold mb-3 text-xl">
            Search <span className={`${isDark && "text-[#EE4A62]"}`}>Blog</span>
          </h3>
          <div className="relative w-72 max-lg:w-full">
            <input
              type="text"
              placeholder="Keywords..."
              className="w-full px-4 py-2 pr-10 border border-[#CAD5E2] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <icons.Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#90A1B9]" />
          </div>
        </div>

        {/* Categories */}
        <div
          className={`py-4 px-6 rounded-2xl shadow-md ${
            isDark ? `bg-[#1C242F]` : `bg-[#ffffff]`
          } `}
        >
          <h3 className="font-semibold mb-3 text-xl">Categories</h3>
          <ul className="space-y-2 text-sm text-[#64748B]">
            <li className="flex justify-between text-center">
              Business Studies
              <span
                className={`${
                  isDark && `rounded-full font-bold px-2 bg-[#21324B]`
                }`}
              >
                12
              </span>
            </li>

            <li className="flex justify-between">
              Computer & IT
              <span
                className={`${
                  isDark && `rounded-full font-bold px-2 bg-[#21324B]`
                }`}
              >
                8
              </span>
            </li>
            <li className="flex justify-between text-[#3972FF]">
              Developer
              <span
                className={`${
                  isDark &&
                  `rounded-full px-2 font-bold bg-[#CCDDFF] text-[#3972FF]`
                }`}
              >
                21
              </span>
            </li>
            <li className="flex justify-between">
              Marketing
              <span
                className={`${
                  isDark && `rounded-full font-bold px-2 bg-[#21324B]`
                }`}
              >
                5
              </span>
            </li>
            <li className="flex justify-between">
              Uncategorized
              <span
                className={`${
                  isDark && `rounded-full font-bold px-2 bg-[#21324B]`
                }`}
              >
                2
              </span>
            </li>
          </ul>
        </div>

        {/* Related Courses */}
        <div
          className={`py-4 px-6 rounded-2xl shadow-md ${
            isDark ? `bg-[#1C242F]` : `bg-[#ffffff]`
          }`}
        >
          <h3 className="font-semibold text-xl mb-3">
            Related{" "}
            <span
              className={`text-xl ${
                isDark ? `text-[#EE4A62]` : `text-[#1D293D]`
              }`}
            >
              Courses
            </span>
          </h3>
          <div>
            <div className="flex gap-3">
              <img src={images.seo} alt="SEO" />
              <ul className="space-y-0 text-sm">
                <p className="text-[#314158] font-semibold">
                  SEO & Content Marketing
                </p>
                <li className={`${isDark && `text-[#314158]`}`}>Masterclass</li>
                <li className="text-[#62748E]">with John Smith</li>
              </ul>
            </div>
            <br />
            <div className="flex gap-3">
              <img src={images.copywrite} alt="Copy-Write" />
              <ul className="space-y-0 text-sm">
                <p className="text-[#314158] font-semibold">
                  The Complete Copywriting
                </p>
                <li className={`${isDark && `text-[#314158]`}`}>Course</li>
                <li className="text-[#62748E]">with Emily White</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    // </div>
  );
}
export default BlogDetails;
