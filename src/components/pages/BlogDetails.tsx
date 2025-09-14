// import * as icons from "@/assets/icons/icons";
import * as images from "@/assets/images/images";

// function BlogDetails() {
//   return (
//     <div className="w-full flex justify-center ">
//       {/* bg-[#1C242F] in dark mode */}
//       <div className="container ">
//         <span>Home : Blog : Become a Better Bloger</span>
//         <div className="flex gap-5">
//           {/*  */}
//           {/* Left Section */}
//           <div className="flex flex-col gap-5 bg-[#1C242F] rounded-2xl p-2 w-3xl">
//             {/* upper part */}
//             <div className="shadow-md rounded-lg p-4">
//               <div className="my-6">
//                 <span className="bg-[#DFF2FE] text-[#0069A8] rounded-full px-2 py-1 font-semibold">
//                   DEVELOPER
//                 </span>
//               </div>
//               <h1 className="text-5xl">
//                 <strong>Become a Better Blogger: The</strong>
//                 <span> Ultimate Guide to Content Planning</span>
//               </h1>
//               {/* need icons here */}
//               <div className="py-4">
//                 <span>Jane Doe Nov 10, 2023 8 min read</span>
//               </div>
//               {/* image */}
//               <div>
//                 <img src={images.ideas} alt="ideas" className="rounded-lg" />
//               </div>
//               {/* text */}
//               <div>
//                 <p>
//                   In the sprawling universe of the internet, content is king.
//                   But without a strategic plan, even the most brilliant ideas
//                   can get lost in the noise. This guide will walk you through
//                   the art and science of content planning, helping you create a
//                   roadmap to consistent, high-quality, and engaging blog posts
//                   that resonate with your audience.
//                 </p>
//                 <br />
//                 <span>The Complete Curricula</span>
//                 <p>
//                   A well-structured content plan is much like a course
//                   curriculum. It needs a logical flow, clear objectives, and
//                   modules that build upon each other. Think of your blog as an
//                   educational journey for your reader. What do you want them to
//                   learn, and in what order? Breaking down your core topics into
//                   smaller, digestible posts is the first step toward building a
//                   content empire.
//                 </p>
//                 <br />
//                 <p>
//                   Effective content planning transforms your blog from a simple
//                   collection of posts into a powerful resource and a magnet for
//                   your target audience.
//                 </p>
//                 <br />
//                 <span>Finding Your Intrinsic Motivation</span>
//                 <p>
//                   Before diving into calendars and keyword tools, it's crucial
//                   to connect with your 'why'. What drives you to share your
//                   knowledge? Authentic passion is palpable and will sustain you
//                   through the inevitable creative lulls. Understanding your
//                   motivation also helps in defining your unique voice and
//                   perspective, which are your greatest assets in a crowded
//                   digital landscape.
//                 </p>
//               </div>
//               {/* 2 images */}
//               <div className="flex justify-between my-8">
//                 <img
//                   src={images.student}
//                   alt="student"
//                   className="w-[48%] rounded-lg"
//                 />
//                 <img
//                   src={images.tablet}
//                   alt="tablet"
//                   className="w-[48%] rounded-lg"
//                 />
//               </div>
//               {/* text 2 */}
//               <div>
//                 <span>Crafting the Content Calendar</span>
//                 <p>
//                   Your content calendar is your command center. It’s where
//                   strategy meets execution. Here's a simple framework to get
//                   started:
//                 </p>
//                 <br />
//                 <p>
//                   Monthly Themes: Assign a broad topic for each month. Weekly
//                   Sub-Topics: Break down the monthly theme into specific blog
//                   post ideas. Key Details: For each post, note the target
//                   keyword, CTA, required visuals, and publication date.
//                   Promotion Checklist: Plan how you'll distribute the content
//                   (social media, newsletter, etc.).
//                 </p>
//                 <p>
//                   Tools like Trello, Asana, Notion, or even a simple Google
//                   Sheet can be incredibly effective for managing your calendar.
//                   The key is to find a system that works for you and stick to
//                   it.
//                 </p>
//               </div>
//               {/* Tags*/}
//               <div className="my-5 ">
//                 <h2>TAGS</h2>
//                 <div className="flex gap-5">
//                   <span>Technology</span>
//                   <span>Planning</span>
//                   <span>SEO</span>
//                   <span>Marketing</span>
//                 </div>
//               </div>
//             </div>

//             {/* About Jane Doe */}
//             <div className="shadow-md rounded-lg p-4 mt-5 mb-20">
//               {/* image */}
//               <div>
//                 <img src="" alt="empty" />
//               </div>
//               <div>
//                 <h2>About Jane Doe</h2>
//                 <p>
//                   Jane is a senior content strategist at EduHub with over 10
//                   years of experience in digital marketing and education
//                   technology. She is passionate about helping creators build
//                   impactful online platforms.
//                 </p>
//                 {/* icons */}
//                 <span></span>
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div>
//             <div className="flex flex-col gap-4 w-full">
//               <div className="flex flex-col shadow-md rounded-lg px-4 py-4 gap-2">
//                 <h2 className="text-lg font-semibold">Search Blog</h2>
//                 <div className="">
//                   <input
//                     type="text"
//                     placeholder="Keywords..."
//                     className="rounded-full px-2 py-1 border border-gray-300 focus:border-blue-500 focus:outline-none"
//                   />
//                   {/* + search icon */}
//                 </div>
//               </div>
//               <div className="flex flex-col shadow-md rounded-lg p-5 gap-2">
//                 <h2 className="text-xl font-semibold">Categories</h2>

//                 <p className="flex justify-between">
//                   <span>Business Studies </span>
//                   <span>12</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Computer & IT </span>
//                   <span>8</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Developer </span>
//                   <span>21</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Marketing</span>
//                   <span>5</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Uncategorized</span>
//                   <span>2</span>
//                 </p>
//               </div>
//               <div className="flex flex-col shadow-md rounded-lg px-4 py-4 gap-2">
//                 <h2 className="text-xl font-semibold">Related Courses</h2>
//                 <div className="flex flex-col gap-4 justify-center items-center">
//                   <div>
//                     <p className="font-semibold">SEO & Content Marketing</p>
//                     <p>Masterclass</p>
//                     <p>with John Smith</p>
//                   </div>
//                   <div>
//                     <p>The Complete Copywriting</p>
//                     <p>Course</p>
//                     <p>with Emily White</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogDetails;
export default function BlogDetails() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="w-[90%] mx-auto px-4 py-10 flex gap-4">
        {/* Left Content */}
        <div className="w-full space-y-6 bg-[#1C242F] rounded-lg">
          {/* Blog Title & Info */}
          <div>
            <h1 className="mb-2">
              <h1 className="text-5xl font-extrabold">
                Become a Better Blogger: The
              </h1>
              <span className="text-5xl">
                Ultimate Guide to Content Planning
              </span>
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Jane Doe</span>
              <span>Dec 5th, 2023</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Blog Main Image */}
          <img
            src={images.ideas}
            alt="blog list main image"
            className="w-full rounded-lg"
          />

          {/* Blog Content */}
          <div className="prose prose-invert max-w-none">
            <p>
              In the sprawling universe of the internet, content is king. But
              without a strategic plan, even the most brilliant ideas can get
              lost in the noise...
            </p>

            <h2>The Complete Curricula</h2>
            <p>
              A well-structured content plan is much like a course curriculum.
              It needs a logical flow...
            </p>

            {/* Images Side by Side */}
            <div className="flex gap-4 my-4">
              <img
                src={images.student}
                alt="sub image 1"
                className="w-1/2 rounded-lg"
              />
              <img
                src={images.tablet}
                alt="sub image 2"
                className="w-1/2 rounded-lg"
              />
            </div>

            <h2>Crafting the Content Calendar</h2>
            <p>
              Before diving into calendars and keyword tools, it’s crucial to
              connect with your ‘why’...
            </p>
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
              Blogging
            </span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
              Planning
            </span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
              SEO
            </span>
          </div>

          {/* Author Box */}
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-bold text-lg mb-2">About Jane Doe</h3>
            <p className="text-sm text-gray-300">
              Jane is a digital strategist with 8+ years of experience in
              helping brands grow...
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block  space-y-6">
          {/* Search */}
          <div className="p-4 bg-[#1C242F] rounded-lg shadow-md">
            <h3 className="font-semibold mb-3">Search Blog</h3>
            <div className="rounded-full px-3 py-2 flex items-center gap-2 text-[#64748B]">
              <input
                type="text"
                placeholder="Keywords..."
                className="flex-1 bg-transparent text-sm focus:outline-none border border-[#64748B] rounded-full px-4 py-2"
              />
              <span>🔍</span>
            </div>
          </div>

          {/* Categories */}
          <div className="p-4 bg-[#1C242F] rounded-lg shadow-md">
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li>Content</li>
              <li>Marketing</li>
              <li>Design</li>
              <li>Uncategorized</li>
            </ul>
          </div>

          {/* Related Courses */}
          <div className="p-4 bg-[#1C242F] rounded-lg shadow-md">
            <h3 className="font-semibold mb-3">Related Courses</h3>
            <ul className="space-y-2 text-sm">
              <p className="text-[#314158] font-semibold"> SEO Basics</p>
              <li>📘 Advanced Copywriting</li>
              <li>📘 Digital Marketing</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
