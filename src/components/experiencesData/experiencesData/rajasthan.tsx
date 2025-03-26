export const rajasthan = [
  {
    id: 3,
    country: "India",
    state: "Rajasthan",
    experiencesCoverImage: "/images/experiences/rajasthan/jaipur/jaipur.jpg",
    mapLocation: {
      lg: { top: "38%", left: "15%" },
      md: { top: "38%", left: "15%" },
      sm: { top: "38%", left: "15%" },
    },
    count: "1",
    desc: "",
    keywords: [],
    experiences: [
      {
        id: 1,
        name: "Jaipur & Pushkar Immersion",
        location: "Jaipur",
        nearBy: "Pushkar",
        desc: "",
        metaDesc: {
          title:
            "Jaipur & Pushkar Cultural Adventure: 4-Day Immersive Experience",
          description:
            "Explore Rajasthan’s royal capital and the spiritual town of Pushkar through curated local experiences, traditional crafts, and cultural immersion.",
          keywords: [
            "Jaipur food walk",
            "Pushkar spiritual trip",
            "block printing workshop",
            "Rajasthan immersion",
            "local culture Rajasthan",
            "heritage experience Jaipur",
          ],
          url: "https://local-narratives.com/experience/jaipur",
          type: "website",
        },
        hosts: [
          {
            name: "Mannu",
            imageUrl: "/images/hosts/host_mannu.png",
            descriptions: [
              <>
                Mannu is a passionate culture enthusiast and local guide based
                in Jaipur. He specializes in connecting travelers with
                Rajasthan’s heritage through food, crafts, and storytelling
                experiences. And yes, he is obsessed with selfies :)
              </>,
            ],
          },
        ],
        duration: {
          days: "4 Days",
          nights: "3 Nights",
        },
        meetingPoint: ["Jaipur"],
        placesCovered: ["Jaipur", "Pushkar"],
        permit: "",
        capacity: "4-25 Participants",
        visitingTime: "October to March",
        pickUp: "Jaipur",
        theme: (
          <div className="mb-4 text-xl font-semibold leading-tight text-neutral-900">
            Culinary Walks,{" "}
            <span className="text-orange-600">Sacred Lakes</span>, and{" "}
            <span className="text-pink-600">Craft Immersions</span> in Rajasthan
          </div>
        ),
        price: "25000",
      },
    ],
  },
];
