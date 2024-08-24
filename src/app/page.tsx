import Image from "next/image";
import daniel from "../../public/daniel.png";
import jeanette from "../../public/jeanette.png";
import jonathan from "../../public/jonathan.png";
import kira from "../../public/kira.png";
import patrick from "../../public/patrick.png";
import quote from "../../public/quote.png";




export default function Home() {
  return (
    <main className="min-h-screen bg-light-blue px-4 py-7 grid md:justify-center md:items-center font-main text-sm text-white font-medium">
      <div className="max-w-xl grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto">

        <div className="md:col-span-2 bg-purple border border-light-purple rounded-xl p-8 relative shadow">
          <div className="flex gap-5 items-center">
            <Image className="absolute top-0 right-8 md:right-20" src={quote} alt="Daniel Clifford" height={102} width={102} />
            <Image src={daniel} alt="Daniel Clifford" height={28} width={28} />
            <div>
              <p className="relative z-1">Daniel Clifford</p>
              <p className="relative z-1 text-xs text-gray">Verified Graduate</p>
            </div>
          </div>

          <p className="relative text-xl font-semibold mt-5 mb-10 z-1">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>

          <p className="text-gray">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
        </div>

        <div className="bg-blue rounded-xl p-8 shadow">
          <div className="flex gap-5 items-center">
            <Image src={jonathan} alt="Jonathan Walters" height={28} width={28} />
            <div>
              <p>Daniel Clifford</p>
              <p className="text-xs text-gray ">Verified Graduate</p>
            </div>
          </div>

          <p className="text-xl font-semibold mt-5 mb-10">The team was very supportive and kept me motivated</p>

          <p className="text-gray">“I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.”</p>
        </div>

        <div className="bg-white rounded-xl p-8 text-blue shadow">
          <div className="flex gap-5 items-center">
            <Image src={jeanette} alt="Jonathan Walters" height={28} width={28} />
            <div>
              <p>Jeanette Harmon</p>
              <p className="text-xs text-blue-500">Verified Graduate</p>
            </div>
          </div>

          <p className="text-xl font-semibold mt-5 mb-10">An overall wonderful and rewarding experience</p>

          <p className="text-blue-500">“Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.”</p>
        </div>

        <div className="lg:col-span-2 bg-dark-blue rounded-xl p-8 shadow">
          <div className="flex gap-5 items-center">
            <Image src={patrick} alt="Jonathan Walters" height={28} width={28} />
            <div>
              <p>Patrick Abrams</p>
              <p className="text-xs text-gray">Verified Graduate</p>
            </div>
          </div>

          <p className="text-xl font-semibold mt-5 mb-10">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>

          <p className="text-gray">“The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.”</p>
        </div>
        <div className="lg:col-start-4 lg:row-start-1 lg:row-end-3 bg-white rounded-xl p-8 text-blue shadow">
          <div className="flex gap-5 items-center">
            <Image src={kira} alt="Jonathan Walters" height={28} width={28} />
            <div>
              <p>Kira Whittle</p>
              <p className="text-xs text-blue-500">Verified Graduate</p>
            </div>
          </div>

          <p className="text-xl font-semibold mt-5 mb-10">Such a life-changing experience. Highly recommended!</p>

          <p className="text-blue-500">“Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!”</p>
        </div>
      </div>
    </main>
  );
}
