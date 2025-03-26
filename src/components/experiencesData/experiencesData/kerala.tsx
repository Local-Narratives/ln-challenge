export const kerala = [
  {
    id: 3,
    country: "India",
    state: "Kerala",
    experiencesCoverImage: "/images/experiences/wayanad/wayanad.jpg",
    mapLocation: {
      lg: { top: "79%", left: "26%" },
      md: { top: "79%", left: "26%" },
      sm: { top: "79%", left: "26%" },
    },
    count: "2",
    desc: "",
    keywords: [],
    experiences: [
      {
        id: 1,
        location: "Wayanad",
        name: "Sulthan Bathery Village-Wayanad",
        desc: "",
        nearBy: "Bangalore",
        metaDesc: {
          title:
            "Wayanad Tribal Adventure: Forest Exploration, Tribal Culture & Treehouse Stay", // SEO-friendly title
          description:
            "Experience the rich traditions and natural beauty of Wayanad with a tribal adventure. Explore the jungle, visit tribal villages, and stay in a treehouse while immersing yourself in local culture and customs.",
          keywords: [
            "Wayanad tribal adventure",
            "treehouse accommodation",
            "tribal village experience",
            "nature walk Wayanad",
            "Paniya tribe",
            "forest exploration",
            "tribal culture",
            "coffee plantation visit",
            "Wayanad tourism",
            "tribal market",
            "traditional tribal meals",
            "Wayanad forests",
            "cultural exchange",
            "campfire storytelling",
          ],
          url: "https://local-narratives.com/experience/wayanad", // Example URL
          type: "website", // Open Graph type
        },

        pickUp: "Wayanad",
        hosts: [
          {
            name: "Sajan Lal",
            imageUrl: "/images/hosts/sajanlal.jpg",
            descriptions: [
              <>
                <p>
                  Sajan Lal, a local from Wayanad, will guide you through the
                  forests and tribal areas. His deep connection to the land and
                  community ensures that your journey is rich with local
                  knowledge and tradition.
                </p>
                <blockquote>
                  "In Wayanad, every bird has a home, and every visitor leaves
                  with a story."
                </blockquote>
              </>,
              <>
                <p>
                  He spends his days harvesting produce from the treehouse
                  property, observing deer and elephants from the treehouse,
                  cooking local delicacies, and enjoying the local radio.
                  Managing the house and kitchen, while sharing countless forest
                  stories, are among his greatest passions.
                </p>
              </>,
            ],
          },
          {
            name: "John",
            imageUrl: "/images/corporate/wayanad/john.jpg",
            descriptions: [
              <>
                <p>
                  A local expert with deep knowledge of the area, he guides us
                  on jungle walks to visit the Paniya tribal community. His rich
                  understanding of the terrain and culture offers a truly
                  immersive experience.
                </p>
              </>,
            ],
          },
        ],
        visitingTime: "Throuthout The Year",
        duration: {
          days: "2 Days",
          nights: "1 Night",
        },
        capacity: "7-12 Participants",
        theme: (
          <div className="mb-4 text-xl font-semibold leading-tight text-neutral-900">
            Local Narratives <span className="text-green-500">Treehouse</span>{" "}
            on the Edge of the Forest with Insights into the
            <span className="text-blue-800">Paniya Tribal Community</span>
          </div>
        ),
        price: "7000",
      },
      {
        id: 2,
        location: "Munnar",
        name: "Chinnakanal, Munnar",
        nearBy: "Bangalore",
        desc: "",
        metaDesc: {
          title:
            "Munnar Heritage & Adventure: Cardamom Harvesting, Off-Roading & Sunrise Trek", // SEO-optimized title
          description:
            "Discover the beauty of Munnar with a heritage farm tour, off-roading adventure, and a breathtaking sunrise trek. Engage in sustainable farming, hear local stories around a campfire, and immerse in Munnar's rich culture and natural beauty.",
          keywords: [
            "Munnar adventure",
            "heritage farm experience",
            "cardamom harvesting",
            "tea brewing",
            "off-roading in Munnar",
            "sunrise trek",
            "Munnar culture",
            "local folklore",
            "Kerala tribal experience",
            "sustainable farming",
            "Munnar tourism",
            "tea plantations",
            "Munnar local culture",
          ],
          url: "https://local-narratives.com/experience/munnar",
          type: "website", // Open Graph type
        },

        pickUp: "Theni",
        hosts: [
          {
            name: "Aslam",
            imageUrl: "/images/hosts/aslam.jpg",
            descriptions: [
              <>
                <p>
                  Aslam, an NIT engineer turned cardamom farmer, will guide you
                  through Munnar’s cardamom farms and tea estates. His knowledge
                  of the region and passion for sustainable farming make him the
                  perfect host for this immersive journey.
                </p>
              </>,
            ],
          },
        ],
        visitingTime: "Throughout The Year",
        duration: { days: "2 Days", nights: "1 Night" },
        capacity: "5-11 Participants",
        theme: (
          <div className="mb-4 text-xl font-semibold leading-tight text-neutral-900">
            Local Narratives{" "}
            <span className="text-green-500">Hilltop House</span> and{" "}
            <span className="text-blue-800">Heritage Farm</span> with{" "}
            <span className="text-teal-600">Mudi Tribals</span>: Working Behind
            the Scenes in the Ecosystem
          </div>
        ),
        price: "12000",
      },
    ],
  },
];
