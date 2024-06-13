import logo from '../../assets/hlog2.jpg' 
import bgImage from '../../assets/bg.png';

function Blog(){
    return(
<section class="text-gray-600 body-font bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }} >
  <div class="container px-5 py-20 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={logo}/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center  text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Anonymous1</h2>
            <div class="w-12 h-1 bg-teal-500 rounded mt-2 mb-4"></div>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">For many years, anxiety has been a shadow over my daily life, casting doubt and fear over even the simplest tasks. It’s impacted my ability to enjoy social activities and has often left me feeling isolated and overwhelmed. Recently, I was introduced to a mental health assessment application that a colleague mentioned. This tool has provided me with insights into my anxiety and equipped me with strategies to manage it more effectively.</p>
         
        </div>
      </div>

      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center  text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Anonymous2</h2>
            <div class="w-12 h-1 bg-teal-500 rounded mt-2 mb-4"></div>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">
          I've struggled with anxiety for as long as I can remember. It's been a constant presence in my life, affecting everything from my work to my personal relationships. Recently, I decided to seek help and found this mental health assessment application recommended by a friend. Here's how it has helped me understand and manage my anxiety better:</p>
        
        </div>
      </div>

      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center  text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Anonymous3</h2>
            <div class="w-12 h-1 bg-teal-500 rounded mt-2 mb-4"></div>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Anxiety has been a significant part of my life, influencing my decisions and interactions. It has often prevented me from pursuing opportunities and has strained my relationships with family and friends. On a recommendation from a family member, I decided to try a mental health assessment application. This app has given me a clearer understanding of my anxiety and has guided me towards practical steps to cope with it on a daily basis.</p>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
export default Blog