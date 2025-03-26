export const kavaratti = [
  {
    id: 2,
    country: "India",
    state: "Lakshadweep",
    experiencesCoverImage: "/images/experiences/lakshadweep/lakshwadeep.jpeg",
    mapLocation: {
      lg: { top: "70%", left: "10%" },
      md: { top: "70%", left: "10%" },
      sm: { top: "70%", left: "10%" },
    },
    count: "1",
    desc: "",
    keywords: [],
    experiences: [
      {
        id: 1,
        name: "Kavaratti, Lakshadweep",
        location: "Kavaratti",
        nearBy: "Lakshadweep",
        desc: "",
        metaDesc: {
          title:
            "Kavaratti Island Immersive Adventure: 5-Day Island Life Experience", // Title for SEO
          description:
            "Embark on a transformative 5-day island adventure in Kavaratti. Experience local culture, scuba diving, community engagement, traditional crafts, and more. Immerse yourself in the island way of life with guided tours, community experiences, and unforgettable island hospitality.",
          keywords: [
            "Agatti Island experience",
            "Kavaratti Island adventure",
            "local culture immersion",
            "scuba diving",
            "island crafts",
            "women's empowerment",
            "island life experience",
            "traditional fishing",
            "island travel",
            "local cuisine",
            "heritage walk",
            "community engagement",
          ],
          url: "https://local-narratives.com/experience/kavaratti", // Example URL
          type: "website", // Open Graph type
        },

        hosts: [
          {
            name: "Khaja",
            imageUrl: "/images/hosts/host_khaha.png",
            descriptions: [
              <>
                Khaja, a local from Kavaratti Island, has always been passionate
                about rural development. After earning a master’s in rural
                development, he focused his research on the potential of rural
                tourism on his island. Khaja knows every inch of Kavaratti, but
                his true magic lies beneath the waves. Having spent more of his
                life underwater than on land, he’s become the island's ultimate
                guide—whether navigating coral reefs or sharing marine stories.
                Past visitors rave about Khaja’s hospitality and infectious
                enthusiasm. Need something special? He’ll make it happen. It’s
                no wonder travelers leave with a deep love for both the island
                and its unforgettable host.
              </>,
            ],
          },
        ],
        duration: {
          days: "5 Days",
          nights: "4 Nights",
        },
        meetingPoint: ["Agatti to Agatti"],
        placesCovered: ["Agatti", "Kavaratti"],
        permit:
          "All necessary permits for Lakshadweep travel and activities. (1 month advance confirmation needed)",
        capacity: "5-25 Participants",
        visitingTime: "November-April",
        pickUp: "Agatti Island Airport",

        theme: (
          <div className="mb-4 text-xl font-semibold leading-tight text-neutral-900">
            Local Narratives <span className="text-teal-600">Beach House</span>{" "}
            on a <span className="text-blue-600">Remote Island</span> and Island
            Life with a{" "}
            <span className="text-purple-600">
              Local Women Empowerment Group
            </span>
          </div>
        ),
        price: "40000",
      },
    ],
  },
];
