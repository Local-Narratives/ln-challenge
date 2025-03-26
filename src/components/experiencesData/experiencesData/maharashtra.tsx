export const maharashtra = [
  {
    id: 3,
    country: "India",
    state: "Maharashtra",
    experiencesCoverImage: "/images/experiences/sahyadri/Sahyadri.webp",
    mapLocation: {
      lg: { top: "58%", left: "18%" },
      md: { top: "58%", left: "18%" },
      sm: { top: "58%", left: "18%" },
    },
    count: "1",
    desc: "",
    keywords: [],
    experiences: [
      {
        id: 1,
        location: "Sahyadri",
        name: "Indore Village, Sahyadri",
        assetsDir: "experiences/maharashtra/sahyadri",
        nearBy: "Mumbai",
        desc: "",
        metaDesc: {
          title:
            "Indore Village Rural Rhythms: Immersive Farming & Cultural Adventure", // SEO-optimized title
          description:
            "Discover the heart of rural India with the Indore Village Rural Rhythms experience. From rice farming and traditional crafts to the stunning Kalsubai trek and bonfire storytelling, this immersive 2-day adventure connects you to nature, culture, and the local community.",
          keywords: [
            "Indore Village experience",
            "rural adventure",
            "traditional farming",
            "Kalsubai trek",
            "community immersion",
            "bonfire stories",
            "Adivasi culture",
            "rice fields",
            "Maharashtra travel",
            "rural India",
            "village life experience",
          ],
          url: "https://local-narratives.com/experience/sahyadri", // Example URL
          type: "website", // Open Graph type
        },

        pickUp: "Kasara Railway Station",
        hosts: [
          {
            name: "Dnyaneshwar Dada",
            imageUrl: "/images/hosts/host_uttom_data.png",
            descriptions: [
              <>
                Dnyaneshwar Dada and Family – Your cultural guides, paddy
                farmers, and keepers of tradition. Their warmth and hospitality
                will be the soul of your experience. He is a paddy farmer, doing
                it generationally, passionate about trekking, stories of
                mountains, and his kids will feel your heart. They like playing
                in mud, and they will make you jump in the mud field.
              </>,
            ],
          },
        ],
        visitingTime: "June - March",
        duration: {
          days: "2 Days",
          nights: "1 Night",
        },

        capacity: "10-20 Participants",
        theme: (
          <div className="mb-4 text-xl font-semibold leading-tight text-neutral-900">
            Local Narratives <span className="text-green-500">tent stay</span>{" "}
            in <span className="text-blue-800">paddy field</span> by the{" "}
            <span className="text-teal-600">mountains</span>
          </div>
        ),
        price: "2500",
      },
    ],
  },
];
