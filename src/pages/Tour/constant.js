export const videosData = [
  {
    id: 0,
    url: "https://wyamroassets.s3.ap-south-1.amazonaws.com/meditation.mp4",
    text: `"Embark on a Journey of Self-Discovery and Inner Peace". In today's fast-paced world, where the demands of daily life can often feel overwhelming, it's essential to find moments of tranquility and self-discovery. If you're seeking a profound experience that combines the serenity of spiritual places with the transformative power of yoga, our tour is just what you need. Join us as we take
     you on a unique journey of self-exploration and inner peace, weaving through some of the most powerful spiritual destinations.
      By combining the transformative power of yoga with visits to spiritual places, our tour offers you a unique opportunity to: 
      Enhance Self-Awareness, Cultivate Mindfulness, Strengthen Your Body, Find Inner Peace.`,
    heading: "Self Exploration",
  },
  {
    id: 1,
    url: "https://wyamroassets.s3.ap-south-1.amazonaws.com/kedar.mp4",
    text: `Imagine waking up to the soothing sounds of nature, 
    surrounded by the beauty of ancient temples, lush forests, 
    and serene landscapes. Our yogic tour is designed to provide 
    you with an immersive experience that rejuvenates your mind, body, and soul.
     You can expect - Daily Yoga and Meditation, Visits to Sacred and powerful Sites, Cultural Immersion
     Nature Retreats, Healthy Cuisine, Group Dynamics, 
    `,
    heading: "Powerfull Spiritual places",
  },
];

export const prepareData = (allData, index = 999) => {
  let allVideos = allData?.map((data, i) => {
    if (index === i) {
      data.selected = true;
    } else {
      data.selected = false;
    }
    return data;
  });
  return allVideos;
};
