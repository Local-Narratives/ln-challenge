export const karnataka = [
  // Karnataka
  {
    id: 1,
    country: "India",
    state: "Karnataka",
    experiencesCoverImage: "/images/experiences/coorg/coorg.jpg",
    mapLocation: {
      lg: { top: "70%", left: "20%" },
      md: { top: "70%", left: "20%" },
      sm: { top: "70%", left: "20%" },
    },
    count: "3",
    desc: "",
    keywords: [],
    experiences: [
      //coorg
      {
        id: 3,
        location: "Coorg",
        name: "Theralu Village-Coorg, Karnataka",
        desc: "",
        metaDesc: {
          title: "Coorg Life Immersion: Coffee Estate & Local Traditions", // SEO-optimized title
          description:
            "Experience the serene life of Coorg with the Coorg Life Immersion. From exploring coffee plantations and learning traditional Coorgi farming methods to enjoying family-style meals and storytelling around the campfire, immerse yourself in the authentic local culture of Coorg.",
          keywords: [
            "Coorg experience",
            "coffee plantation tour",
            "Coorgi meal",
            "campfire storytelling",
            "local traditions",
            "Coorg coffee estate",
            "nature walk",
            "Bangalore to Coorg",
            "family-style meal",
            "Coorg travel",
            "coffee farming",
          ],
          url: "https://local-narratives.com/experience/coorg",
          type: "website",
        },
        nearBy: "Bangalore",
        pickUp: "Coorg",
        hosts: [
          {
            name: "Mahendra",
            imageUrl: "/images/hosts/mahendra.jpg",
            descriptions: [
              <>
                <p>
                  Shifted from Nepal to Coorg and now works on a coffee estate.
                  He spends his days cooking, walking around the coffee estate,
                  and managing the lake house. His Nepali style of cooking,
                  combined with Coorgi local ingredients, gives the food a
                  unique fusion twist.
                </p>
              </>,
            ],
          },
          {
            name: "Sunil and Harish",
            // imageUrl: "/images/hosts/harish.jpg",
            descriptions: [
              <>
                <p>
                  Coffee estate farmers who are passionate about coffee making.
                  They curate coffee plantation walks and speak about the
                  coffee-making process with passion in their eyes.
                </p>
              </>,
            ],
          },
          {
            name: "Danny",
            // imageUrl: "/images/hosts/harish.jpg",
            descriptions: [
              <>
                <p>
                  A naturalist who moved from the city to the forest out of
                  curiosity about the forest and the human-nature relationship.
                  He takes us on forest walks, teaching us how to observe,
                  embrace, and respect the forest ecosystem for a deeply
                  immersive experience.
                </p>
              </>,
            ],
          },
        ],

        capacity: "6-12 Participants",
        price: "30000-50000",
        duration: {
          days: "2 Days",
          nights: "1 Night",
        },

        visitingTime: "Throught The Year",
        theme: (
          <div className="mb-4 text-xl font-semibold leading-tight text-neutral-900">
            Local Narratives in a{" "}
            <span className="text-green-500">Coffee Estate</span> with Insights
            into the
            <span className="text-blue-800">Farmer’s Life</span>
          </div>
        ),
      },
      // channapatan and kokarebellur common
      {
        id: 4,
        name: "Local Experience in Channapatna and kokarebellur",
        location: "Channapatna-Kokarebellur",
        desc: "",
        metaDesc: {
          title:
            "Karnataka Artisan Experience: Wooden Toy Making, Craftsmanship & Bird Photography",
          description:
            "Dive into Karnataka's rich heritage with a hands-on wooden toy-making workshop, guided tours of local artisan workshops, and bird photography sessions. Connect with artisans, explore sustainable craftsmanship, and create your own masterpiece.",
          keywords: [
            "wooden toy making",
            "Karnataka artisans",
            "traditional craftsmanship",
            "bird photography",
            "sericulture",
            "local heritage",
            "sustainable crafts",
            "eco-friendly practices",
            "family-friendly experience",
            "cultural immersion",
            "artisanal workshops",
            "Karnataka tourism",
            "bird conservation",
          ],
          url: "https://local-narratives.com/experience/channapatna-kokarebellur",
          type: "website",
        },
        nearBy: "Bangalore",

        hosts: [
          {
            name: "Linge Gowda",
            imageUrl: "/images/hosts/host_linge_gowda.png",
            descriptions: [
              <>
                <p>
                  <span className="font-semibold">Linge Gowda</span> is a
                  passionate conservationist and the driving force behind
                  Kokarebellur’s efforts to protect migratory birds. His stories
                  and dedication will leave you inspired and deeply connected to
                  nature. He also calls himself,{" "}
                  <span className="italic">“Bird-Man”</span>
                </p>
                <p>
                  "In Kokarebellur, every bird has a home, and every visitor
                  leaves with a story."
                </p>
              </>,
            ],
          },
          {
            name: "Rohel",
            imageUrl: "/images/hosts/host_rohel.png",
            descriptions: [
              <>
                <p>
                  Rohel is a custodian of Channapatna’s toy-making legacy. His
                  passion for the craft and dedication to preserving this
                  heritage is evident in every piece he creates.
                </p>
                <blockquote>
                  "The art of toy-making in Channapatna is more than just
                  tradition—it’s a gift passed through generations, now shared
                  with the world."
                </blockquote>
              </>,
            ],
          },
        ],

        visitingTime: "Throught The Year",
        pickUp: "Channapatna",
        theme: (
          <div className="mb-4 text-xl font-semibold leading-tight text-neutral-900">
            Local Narratives Artisan Immersion in the{" "}
            <span className="text-green-500">Village</span> and{" "}
            <span className="text-blue-800">Nature</span>
          </div>
        ),

        duration: {
          days: "1 Day",
          nights: "-",
        },
        price: "4000",
        capacity: "7-12 Participants",
      },
    ],
  },
];
