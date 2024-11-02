import React, { useEffect, useState, useRef } from "react";
import Filter from "../components/layout/Filter";
import Card from "../components/smallComponents/Card";

const Projects = () => {
  const [assets, setAssets] = useState([]); // List of currently displayed assets
  const [loading, setLoading] = useState(false); // Loading state
  const [page, setPage] = useState(0); // Current page index
  const loadMoreRef = useRef(null); // Ref for the load more div

  const allAssets = [
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/above-adventure-aerial-air.jpg",
      title: "Above Adventure Aerial View",
      content: "An aerial view capturing the stunning landscape of adventure locations.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/aroni-arsa-children-little.jpg",
      title: "Little Children Playing",
      content: "A heartwarming image of children at play.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg",
      title: "Bellingrath Gardens",
      content: "A scenic view of the beautiful Bellingrath Gardens.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
      title: "Stunning Garden Landscape",
      content: "A captivating landscape of Bellingrath Gardens.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/dolphin-marine-mammals-water-sea-64219.jpeg",
      title: "Dolphins in the Wild",
      content: "A mesmerizing photograph of dolphins swimming freely.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/drops-of-water-water-nature-liquid-40784.jpeg",
      title: "Drops of Water",
      content: "A close-up shot of water droplets, emphasizing nature’s beauty.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/elephant-cub-tsavo-kenya-66898.jpeg",
      title: "Elephant Cub in Tsavo",
      content: "An adorable image of a young elephant cub.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/field-clouds-sky-earth-46160.jpeg",
      title: "Field Under the Clouds",
      content: "A serene landscape of a field under a dramatic sky.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/garden-rose-red-pink-56866.jpeg",
      title: "Beautiful Roses",
      content: "A stunning display of red and pink roses.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/italy-mountains-dawn-daybreak-147411.jpeg",
      title: "Italian Mountains at Dawn",
      content: "A breathtaking view of the Italian mountains at dawn.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1002703.jpeg", title: "Scenic View", content: "A beautiful scenic view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1024975.jpeg",
      title: "Nature Bliss",
      content: "An image that captures the beauty of nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1051838.jpeg",
      title: "Mountain Peaks",
      content: "A stunning view of mountain peaks.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1072824.jpeg",
      title: "Desert Landscape",
      content: "A picturesque desert landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1076758.jpeg",
      title: "Lush Greenery",
      content: "A vibrant image of lush greenery.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1097456.jpeg", title: "Waterfall Beauty", content: "A mesmerizing waterfall." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1108099.jpeg", title: "Tranquil Beach", content: "A serene beach setting." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1108572.jpeg", title: "Forest Path", content: "A peaceful forest path." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1122639.jpeg", title: "Night Sky", content: "A beautiful view of the night sky." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1128797.jpeg", title: "Cityscape", content: "A breathtaking cityscape." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1133957.jpeg", title: "Sunset View", content: "A stunning sunset view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1152359.jpeg",
      title: "Ocean Waves",
      content: "An image of beautiful ocean waves.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1172849.jpeg", title: "Wildlife", content: "An image showcasing wildlife." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1179225.jpeg",
      title: "Colorful Flowers",
      content: "A vibrant collection of colorful flowers.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1187079.jpeg", title: "Golden Fields", content: "A picturesque golden field." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1212487.jpeg", title: "Foggy Morning", content: "A serene foggy morning scene." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1226302.jpeg",
      title: "Rainy Day",
      content: "An image capturing the essence of a rainy day.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1227513.jpeg", title: "Snowy Landscape", content: "A beautiful snowy landscape." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1250260.jpeg",
      title: "Autumn Leaves",
      content: "An image of colorful autumn leaves.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-126271.jpeg",
      title: "Lavender Fields",
      content: "A stunning view of lavender fields.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1263986.jpeg",
      title: "Coastal Cliffs",
      content: "A dramatic view of coastal cliffs.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1308881.jpeg",
      title: "Starry Night",
      content: "A mesmerizing view of a starry night.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1323550.jpeg",
      title: "Mountain Lake",
      content: "A beautiful lake nestled in the mountains.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1350197.jpeg", title: "Cactus Garden", content: "A stunning cactus garden." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1353938.jpeg", title: "Rocky Shore", content: "A view of a rocky shore." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1368382.jpeg", title: "Calm Waters", content: "An image showcasing calm waters." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1386604.jpeg",
      title: "Lighthouse",
      content: "An image of a picturesque lighthouse.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1391498.jpeg",
      title: "Winter Wonderland",
      content: "A beautiful winter wonderland scene.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1416736.jpeg",
      title: "Peaceful Stream",
      content: "An image of a peaceful stream.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1420440.jpeg", title: "Flower Meadow", content: "A vibrant flower meadow." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1459495.jpeg", title: "Sky Reflection", content: "An image reflecting the sky." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1477166.jpeg", title: "Desert Sunset", content: "A beautiful desert sunset." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1533720.jpeg", title: "Tulip Field", content: "A stunning tulip field." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1580271.jpeg", title: "Wildflowers", content: "A vibrant wildflower display." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1659438.jpeg", title: "Butterflies", content: "An image of colorful butterflies." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-167684.jpeg", title: "Forest Stream", content: "A serene forest stream." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-172289.jpeg",
      title: "Rocky Mountain",
      content: "A breathtaking view of a rocky mountain.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1723637.jpeg", title: "River Landscape", content: "A beautiful river landscape." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1758144.jpeg", title: "City Lights", content: "An image of vibrant city lights." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1883385.jpeg", title: "Sunflower Field", content: "A stunning sunflower field." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1903611.jpeg",
      title: "Snowy Mountain",
      content: "A picturesque snowy mountain view.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1955134.jpeg", title: "Orchard", content: "A vibrant orchard." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1966641.jpeg", title: "Seaside", content: "A serene seaside view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1984254.jpeg",
      title: "Morning Mist",
      content: "An image of a beautiful morning mist.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1984476.jpeg", title: "Rocky Beach", content: "A view of a rocky beach." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1986355.jpeg",
      title: "Wildlife in Nature",
      content: "An image showcasing wildlife in its natural habitat.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-1995365.jpeg",
      title: "Peaceful Lake",
      content: "A serene image of a peaceful lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2023252.jpeg",
      title: "Mountain Reflections",
      content: "A stunning image of mountains reflecting in the water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2048761.jpeg",
      title: "Quiet Forest",
      content: "An image of a quiet forest setting.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2095088.jpeg", title: "Golden Sunset", content: "A beautiful golden sunset view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2101298.jpeg",
      title: "Fallen Leaves",
      content: "An image capturing the essence of fallen leaves.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2104484.jpeg",
      title: "Lavender Sunset",
      content: "A breathtaking view of lavender fields at sunset.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2151366.jpeg", title: "City Park", content: "A vibrant city park setting." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2222135.jpeg", title: "Glistening Lake", content: "A beautiful glistening lake." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2227513.jpeg", title: "Foggy Hills", content: "An image of foggy hills." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2230575.jpeg",
      title: "Climbing Roses",
      content: "A stunning image of climbing roses.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2255775.jpeg", title: "Sunlit Forest", content: "A sunlit forest scene." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2260957.jpeg", title: "Misty Mountains", content: "An image of misty mountains." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2273087.jpeg", title: "Evening Glow", content: "A serene evening glow setting." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2327489.jpeg",
      title: "Charming Village",
      content: "An image of a charming village.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2333386.jpeg", title: "Tulip Garden", content: "A vibrant tulip garden." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2343498.jpeg", title: "Cascading Water", content: "An image of cascading water." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2349838.jpeg", title: "City View", content: "An image showcasing a city view." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2359733.jpeg",
      title: "Bright Flowers",
      content: "A vibrant display of bright flowers.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2379592.jpeg", title: "Winter Cabin", content: "A cozy winter cabin in the snow." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2389534.jpeg",
      title: "Fishing Boat",
      content: "An image of a fishing boat on the water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2391243.jpeg",
      title: "Orchard in Bloom",
      content: "A beautiful orchard in bloom.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2400323.jpeg", title: "Autumn Path", content: "A picturesque autumn path." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2400650.jpeg", title: "Snowy Trees", content: "An image of snowy trees." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2405151.jpeg", title: "Vibrant Sunset", content: "A vibrant sunset view." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2411628.jpeg", title: "Coastal Path", content: "A beautiful coastal path." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2416788.jpeg",
      title: "Countryside Landscape",
      content: "An image showcasing a beautiful countryside landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2434559.jpeg",
      title: "Seaside Sunrise",
      content: "A stunning seaside sunrise view.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2435116.jpeg",
      title: "Mountain Trail",
      content: "An image of a picturesque mountain trail.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2435133.jpeg",
      title: "Island Paradise",
      content: "An image of a beautiful island paradise.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2457212.jpeg", title: "Clear Blue Sky", content: "An image of a clear blue sky." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2461705.jpeg", title: "Calm Sea", content: "An image of a calm sea." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2473302.jpeg", title: "Golden Hour", content: "An image of the golden hour." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2490468.jpeg",
      title: "Vibrant Beach",
      content: "An image of a vibrant beach setting.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2492575.jpeg",
      title: "Coastal Breeze",
      content: "An image of a gentle coastal breeze.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2502202.jpeg",
      title: "Floral Landscape",
      content: "An image of a beautiful floral landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2508813.jpeg",
      title: "Colorful Sunset",
      content: "An image of a colorful sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2514356.jpeg",
      title: "City at Night",
      content: "An image of a vibrant city at night.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2517105.jpeg", title: "Foggy Lake", content: "An image of a foggy lake." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2523938.jpeg",
      title: "Rainy Forest",
      content: "An image capturing the beauty of a rainy forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2534860.jpeg",
      title: "Sunset over Water",
      content: "An image of a sunset over water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2536946.jpeg",
      title: "Hiking Trail",
      content: "An image of a beautiful hiking trail.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2539117.jpeg",
      title: "Snowy Mountain Range",
      content: "An image of a snowy mountain range.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2540123.jpeg",
      title: "Desert Sand Dunes",
      content: "An image of desert sand dunes.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2540128.jpeg",
      title: "Snowy Landscape",
      content: "An image of a beautiful snowy landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2543772.jpeg",
      title: "Bright Green Field",
      content: "An image of a bright green field.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2555041.jpeg",
      title: "Mountain Refuge",
      content: "An image of a peaceful mountain refuge.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2561283.jpeg", title: "Golden Beach", content: "An image of a golden beach." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2563252.jpeg",
      title: "Rural Landscape",
      content: "An image of a beautiful rural landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2576531.jpeg",
      title: "Cascading Waterfall",
      content: "An image of a cascading waterfall.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2576623.jpeg",
      title: "Forest Pathway",
      content: "An image of a peaceful forest pathway.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2578501.jpeg",
      title: "Blooming Garden",
      content: "An image of a blooming garden.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2581314.jpeg",
      title: "Twilight Mountains",
      content: "An image of twilight over the mountains.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582888.jpeg",
      title: "Starry Night Sky",
      content: "An image of a starry night sky.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582889.jpeg",
      title: "Coastal Waves",
      content: "An image of waves crashing on the coast.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582890.jpeg", title: "Serene Marsh", content: "An image of a serene marshland." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582891.jpeg",
      title: "Colorful Rocks",
      content: "An image of colorful rocks in nature.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582892.jpeg", title: "Glistening Snow", content: "An image of glistening snow." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582893.jpeg", title: "Breezy Meadow", content: "An image of a breezy meadow." },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582894.jpeg", title: "Tranquil River", content: "An image of a tranquil river." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582895.jpeg",
      title: "Desert Landscape",
      content: "An image of a vast desert landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582896.jpeg",
      title: "Sunset at the Lake",
      content: "An image of a sunset at the lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582897.jpeg",
      title: "Lavender Fields",
      content: "An image of beautiful lavender fields.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582898.jpeg",
      title: "Evening Forest",
      content: "An image of a tranquil evening forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582899.jpeg",
      title: "Calm Horizon",
      content: "An image of a calm horizon at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582900.jpeg",
      title: "Morning Serenity",
      content: "An image of a serene morning scene.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582901.jpeg",
      title: "Whispering Pines",
      content: "An image of whispering pines in a forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582902.jpeg",
      title: "River Reflection",
      content: "An image of a river reflecting the sky.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582903.jpeg",
      title: "Serenity in Nature",
      content: "An image capturing the essence of serenity in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582904.jpeg",
      title: "Mountain Range at Dusk",
      content: "An image of a mountain range at dusk.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582905.jpeg",
      title: "Beach Serenity",
      content: "An image of serenity at the beach.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582906.jpeg",
      title: "Cascading Spring",
      content: "An image of a cascading spring in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582907.jpeg",
      title: "Autumn Glow",
      content: "An image of autumn leaves glowing in the sunlight.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582908.jpeg",
      title: "Quiet Lake",
      content: "An image of a quiet lake surrounded by trees.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582909.jpeg",
      title: "Blossoming Tree",
      content: "An image of a blossoming tree in spring.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582910.jpeg",
      title: "Nature’s Canvas",
      content: "An image of nature’s beauty captured on canvas.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582911.jpeg",
      title: "Lakeside Retreat",
      content: "An image of a lakeside retreat in the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582912.jpeg",
      title: "Glowing Sunset",
      content: "An image of a glowing sunset over the mountains.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582913.jpeg",
      title: "Forest Serenity",
      content: "An image of serenity in the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582914.jpeg",
      title: "Calm Oasis",
      content: "An image of a calm oasis in the desert.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582915.jpeg",
      title: "Starry Sky over Lake",
      content: "An image of a starry sky reflected in a lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582916.jpeg",
      title: "Desert Sunset",
      content: "An image of a beautiful desert sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582917.jpeg",
      title: "Tranquil Lake at Dusk",
      content: "An image of a tranquil lake at dusk.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582918.jpeg", title: "Meadow at Dawn", content: "An image of a meadow at dawn." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582919.jpeg",
      title: "Winter Wonderland",
      content: "An image of a winter wonderland scene.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582920.jpeg",
      title: "Golden Meadow",
      content: "An image of a golden meadow at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582921.jpeg",
      title: "Spring Bloom",
      content: "An image of flowers blooming in spring.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582922.jpeg",
      title: "Ethereal Fog",
      content: "An image of ethereal fog in the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582923.jpeg",
      title: "Soothing Waters",
      content: "An image of soothing waters in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582924.jpeg",
      title: "Charming Cottage",
      content: "An image of a charming cottage in the woods.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582925.jpeg", title: "Snowy Peaks", content: "An image of snowy mountain peaks." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582926.jpeg",
      title: "Quiet Stream",
      content: "An image of a quiet stream in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582927.jpeg",
      title: "Vibrant Wildlife",
      content: "An image of vibrant wildlife in its habitat.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582928.jpeg",
      title: "Shimmering Waters",
      content: "An image of shimmering waters in the sunlight.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582929.jpeg",
      title: "Dawn at the Beach",
      content: "An image of dawn at the beach.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582930.jpeg",
      title: "Sunset Over Hills",
      content: "An image of a sunset over rolling hills.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582931.jpeg",
      title: "Moonlit Forest",
      content: "An image of a forest illuminated by moonlight.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582932.jpeg",
      title: "Blooming Spring",
      content: "An image of nature in full bloom during spring.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582933.jpeg",
      title: "Majestic Waterfall",
      content: "An image of a majestic waterfall in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582934.jpeg",
      title: "Serene Sunrise",
      content: "An image of a serene sunrise over a lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582935.jpeg",
      title: "Peaceful Cove",
      content: "An image of a peaceful cove in the ocean.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582936.jpeg",
      title: "Glistening Dew",
      content: "An image of glistening dew on grass.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582937.jpeg",
      title: "Tranquil Forest",
      content: "An image of a tranquil forest scene.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582938.jpeg",
      title: "Autumn Landscape",
      content: "An image of an autumn landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582939.jpeg",
      title: "Coastal Serenity",
      content: "An image of a serene coastal scene.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582940.jpeg",
      title: "Golden Hour",
      content: "An image capturing the golden hour in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582941.jpeg",
      title: "Calming Waves",
      content: "An image of calming waves at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582942.jpeg",
      title: "Forest Reflection",
      content: "An image of a forest reflecting in a lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582943.jpeg",
      title: "Desert Mirage",
      content: "An image of a mirage in the desert.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582944.jpeg",
      title: "Cascading Falls",
      content: "An image of cascading falls in a lush landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582945.jpeg",
      title: "Nature’s Symphony",
      content: "An image depicting nature’s beauty and harmony.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582946.jpeg",
      title: "Sunset Reflections",
      content: "An image of sunset reflections in water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582947.jpeg",
      title: "Mountain Stream",
      content: "An image of a mountain stream flowing through nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582948.jpeg",
      title: "Quiet Harbor",
      content: "An image of a quiet harbor at dusk.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582949.jpeg",
      title: "Forest Pathway",
      content: "An image of a tranquil pathway through the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582950.jpeg",
      title: "Lavender Sunset",
      content: "An image of lavender fields at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582951.jpeg",
      title: "Crisp Autumn Day",
      content: "An image of a crisp autumn day in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582952.jpeg",
      title: "Sunset Over Mountains",
      content: "An image of a stunning sunset over the mountains.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582953.jpeg",
      title: "Spring Awakening",
      content: "An image of nature awakening in spring.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582954.jpeg",
      title: "Calm Waters",
      content: "An image of calm waters in the mountains.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582955.jpeg",
      title: "Golden Fields",
      content: "An image of golden fields under a blue sky.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582956.jpeg",
      title: "Starry Sky Over Mountains",
      content: "An image of a starry sky above the mountains.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582957.jpeg",
      title: "Serene Nature",
      content: "An image of serene nature at dawn.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582958.jpeg",
      title: "Whispering Meadows",
      content: "An image of whispering meadows in the wind.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582959.jpeg",
      title: "Foggy Morning",
      content: "An image of a foggy morning in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582960.jpeg",
      title: "Winding River",
      content: "An image of a winding river in the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582961.jpeg",
      title: "Tranquil Valley",
      content: "An image of a tranquil valley in the countryside.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582962.jpeg",
      title: "Sunset over the Ocean",
      content: "An image of a sunset over the ocean waves.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582963.jpeg",
      title: "Lush Greenery",
      content: "An image of lush greenery in a tropical landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582964.jpeg",
      title: "Vibrant Colors",
      content: "An image showcasing vibrant colors in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582965.jpeg",
      title: "Sunrise in the Woods",
      content: "An image of a sunrise illuminating the woods.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582966.jpeg",
      title: "Ocean Breeze",
      content: "An image of the ocean breeze at the beach.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582967.jpeg",
      title: "Rustic Landscape",
      content: "An image of a rustic landscape with mountains.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582968.jpeg",
      title: "Calming Nature",
      content: "An image of calming nature in a peaceful setting.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582969.jpeg",
      title: "Majestic Peaks",
      content: "An image of majestic peaks in the distance.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582970.jpeg",
      title: "Quiet Refuge",
      content: "An image of a quiet refuge in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582971.jpeg",
      title: "Sunset at Sea",
      content: "An image of a sunset at sea with boats.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582972.jpeg",
      title: "Mountain Escape",
      content: "An image of a mountain escape during autumn.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582973.jpeg",
      title: "Breezy Cliffside",
      content: "An image of a breezy cliffside view.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582974.jpeg",
      title: "Emerald Lake",
      content: "An image of an emerald lake surrounded by trees.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582975.jpeg",
      title: "Sunset Glow",
      content: "An image of a sunset glow over the hills.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582976.jpeg",
      title: "Vibrant Sunset",
      content: "An image of a vibrant sunset over the ocean.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582977.jpeg",
      title: "Nature’s Embrace",
      content: "An image of nature’s embrace in the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582978.jpeg",
      title: "Waves at Sunset",
      content: "An image of waves crashing at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582979.jpeg",
      title: "Rustling Leaves",
      content: "An image of rustling leaves in the wind.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582980.jpeg",
      title: "Radiant Sunbeam",
      content: "An image of a radiant sunbeam piercing through trees.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582981.jpeg",
      title: "Forest Oasis",
      content: "An image of a forest oasis in a secluded area.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582982.jpeg",
      title: "Sunset at the Cliff",
      content: "An image of a sunset at a cliffside.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582983.jpeg",
      title: "Mountain View",
      content: "An image of a mountain view with clouds.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582984.jpeg",
      title: "Evening Waves",
      content: "An image of evening waves along the shore.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582985.jpeg",
      title: "Whimsical Forest",
      content: "An image of a whimsical forest scene.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582986.jpeg",
      title: "Peaceful Bay",
      content: "An image of a peaceful bay at dusk.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582987.jpeg",
      title: "Misty Mountains",
      content: "An image of misty mountains in the distance.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582988.jpeg",
      title: "Radiant Horizon",
      content: "An image of a radiant horizon at sunrise.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582989.jpeg",
      title: "Summer Meadow",
      content: "An image of a summer meadow filled with flowers.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582990.jpeg",
      title: "Sunset Serenity",
      content: "An image of a serene sunset over a lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582991.jpeg",
      title: "Breezy Afternoon",
      content: "An image of a breezy afternoon in the park.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582992.jpeg",
      title: "Quiet Forest",
      content: "An image of a quiet forest path in the autumn.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582993.jpeg",
      title: "Twilight Glow",
      content: "An image of a twilight glow over the hills.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582994.jpeg",
      title: "Coastal Breeze",
      content: "An image of a coastal breeze at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582995.jpeg",
      title: "Waves and Rocks",
      content: "An image of waves crashing against rocks.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582996.jpeg",
      title: "Sunset Over Hills",
      content: "An image of a sunset over rolling hills.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582997.jpeg",
      title: "Nature’s Canvas",
      content: "An image of nature’s canvas painted by the sunset.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582998.jpeg", title: "Morning Dew", content: "An image of morning dew on grass." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2582999.jpeg",
      title: "Calm Lake",
      content: "An image of a calm lake surrounded by trees.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583000.jpeg",
      title: "Tranquil Reflections",
      content: "An image of tranquil reflections in the water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583001.jpeg",
      title: "Dawn Serenity",
      content: "An image of dawn serenity in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583002.jpeg",
      title: "Waves at Dusk",
      content: "An image of waves crashing at dusk.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583003.jpeg",
      title: "Mountain Oasis",
      content: "An image of a mountain oasis in a hidden valley.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583004.jpeg",
      title: "Ocean Sunset",
      content: "An image of an ocean sunset with silhouettes.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583005.jpeg",
      title: "Serenity in the Wild",
      content: "An image of serenity in the wild forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583006.jpeg",
      title: "Sunkissed Shore",
      content: "An image of a sunkissed shore at midday.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583007.jpeg",
      title: "Rushing Stream",
      content: "An image of a rushing stream in a lush forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583008.jpeg",
      title: "Coastal Tranquility",
      content: "An image of coastal tranquility at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583009.jpeg",
      title: "Misty Forest",
      content: "An image of a misty forest at dawn.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583010.jpeg",
      title: "Summer Evening",
      content: "An image of a summer evening by the lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583011.jpeg",
      title: "Whimsical Meadow",
      content: "An image of a whimsical meadow filled with flowers.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583012.jpeg",
      title: "Tranquil Island",
      content: "An image of a tranquil island surrounded by water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583013.jpeg",
      title: "Sunset Reflections",
      content: "An image of sunset reflections on the water.",
    },
    { imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583014.jpeg", title: "Forest Lake", content: "An image of a serene forest lake." },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583015.jpeg",
      title: "Autumn Pathway",
      content: "An image of an autumn pathway in the woods.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583016.jpeg",
      title: "Secluded Cove",
      content: "An image of a secluded cove at dusk.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583017.jpeg",
      title: "Quiet Retreat",
      content: "An image of a quiet retreat in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583018.jpeg",
      title: "Serene Waterfall",
      content: "An image of a serene waterfall in the jungle.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583019.jpeg",
      title: "Twilight Reflections",
      content: "An image of twilight reflections in a lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583020.jpeg",
      title: "Dusk in the Valley",
      content: "An image of dusk settling in the valley.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583021.jpeg",
      title: "Golden Fields",
      content: "An image of golden fields swaying in the breeze.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583022.jpeg",
      title: "Ocean Serenity",
      content: "An image of ocean serenity at twilight.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583023.jpeg",
      title: "Mountain Escape",
      content: "An image of a mountain escape at sunrise.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583024.jpeg",
      title: "Lakeside Peace",
      content: "An image of peaceful lakeside scenery.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583025.jpeg",
      title: "Tranquil Desert",
      content: "An image of a tranquil desert landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583026.jpeg",
      title: "Forest Escape",
      content: "An image of a forest escape in the summer.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583027.jpeg",
      title: "Sunset Breeze",
      content: "An image of a sunset breeze on the beach.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583028.jpeg",
      title: "Quiet Reflection",
      content: "An image of quiet reflection in a peaceful setting.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583029.jpeg",
      title: "Ethereal Evening",
      content: "An image of an ethereal evening in the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583030.jpeg",
      title: "Coastal Calm",
      content: "An image of coastal calm at dawn.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583031.jpeg",
      title: "Wildflower Meadow",
      content: "An image of a wildflower meadow in bloom.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583032.jpeg",
      title: "Misty Dawn",
      content: "An image of misty dawn over the hills.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583033.jpeg",
      title: "Sunset Over the Horizon",
      content: "An image of a sunset over the horizon.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583034.jpeg",
      title: "Ocean Mist",
      content: "An image of ocean mist at the beach.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583035.jpeg",
      title: "Forest Waterfall",
      content: "An image of a beautiful waterfall in the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583036.jpeg",
      title: "Dawn Over the Lake",
      content: "An image of dawn breaking over the lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583037.jpeg",
      title: "Rays of Light",
      content: "An image of rays of light breaking through the trees.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583038.jpeg",
      title: "Tranquil River",
      content: "An image of a tranquil river winding through the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583039.jpeg",
      title: "Evening Reflections",
      content: "An image of evening reflections on a river.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583040.jpeg",
      title: "Golden Meadows",
      content: "An image of golden meadows at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583041.jpeg",
      title: "Serene Dunes",
      content: "An image of serene sand dunes at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583042.jpeg",
      title: "Ocean Waves",
      content: "An image of ocean waves crashing against the shore.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583043.jpeg",
      title: "Sunset Serenity",
      content: "An image of sunset serenity over the lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583044.jpeg",
      title: "Mountain Reflections",
      content: "An image of mountain reflections in a lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583045.jpeg",
      title: "Desert Sunrise",
      content: "An image of a desert sunrise with vibrant colors.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583046.jpeg",
      title: "Evening Calm",
      content: "An image of evening calm on the water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583047.jpeg",
      title: "Whispering Pines",
      content: "An image of whispering pines in the forest.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583048.jpeg",
      title: "Golden Sunsets",
      content: "An image of golden sunsets in the mountains.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583049.jpeg",
      title: "Tranquil Bay",
      content: "An image of a tranquil bay at dusk.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583050.jpeg",
      title: "Horizon Glow",
      content: "An image of horizon glow at twilight.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583051.jpeg",
      title: "Silhouette Sunset",
      content: "An image of a silhouette sunset over the beach.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583052.jpeg",
      title: "Calm Waters",
      content: "An image of calm waters reflecting the sky.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583053.jpeg",
      title: "Tranquil Night",
      content: "An image of a tranquil night sky with stars.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583054.jpeg",
      title: "Desert Calm",
      content: "An image of a desert landscape at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583055.jpeg",
      title: "Rays Over Water",
      content: "An image of rays of light over the water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583056.jpeg",
      title: "Winding Path",
      content: "An image of a winding path through the woods.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583057.jpeg",
      title: "Twilight Waves",
      content: "An image of twilight waves at the beach.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583058.jpeg",
      title: "Morning Light",
      content: "An image of morning light breaking through the trees.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583059.jpeg",
      title: "Desert Adventure",
      content: "An image of a desert adventure at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583060.jpeg",
      title: "Whispering Winds",
      content: "An image of whispering winds in the grasslands.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583061.jpeg",
      title: "Ocean Twilight",
      content: "An image of ocean twilight with waves crashing.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583062.jpeg",
      title: "Forest Harmony",
      content: "An image of forest harmony at dusk.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583063.jpeg",
      title: "Horizon Reflection",
      content: "An image of horizon reflection in the water.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583064.jpeg",
      title: "Seaside Serenity",
      content: "An image of seaside serenity at dawn.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583065.jpeg",
      title: "Mountain Path",
      content: "An image of a mountain path with scenic views.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583066.jpeg",
      title: "Quiet Pond",
      content: "An image of a quiet pond surrounded by nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583067.jpeg",
      title: "Golden Hour",
      content: "An image of the golden hour illuminating the landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583068.jpeg",
      title: "Secluded Paradise",
      content: "An image of a secluded paradise on a tropical island.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583069.jpeg",
      title: "Serenity at Sea",
      content: "An image of serenity at sea with calm waters.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583070.jpeg",
      title: "Cloudy Sunset",
      content: "An image of a cloudy sunset over the mountains.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583071.jpeg",
      title: "Lush Landscape",
      content: "An image of a lush landscape during spring.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583072.jpeg",
      title: "Misty Morning",
      content: "An image of a misty morning over the hills.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583073.jpeg",
      title: "Mountain Reflections",
      content: "An image of mountain reflections in a serene lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583074.jpeg",
      title: "Coastal Sunrise",
      content: "An image of a coastal sunrise illuminating the sky.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583075.jpeg",
      title: "Golden Glow",
      content: "An image of a golden glow at sunset over the landscape.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583076.jpeg",
      title: "Waves at Sunset",
      content: "An image of waves at sunset on the beach.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583077.jpeg",
      title: "Peaceful Waters",
      content: "An image of peaceful waters reflecting the trees.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583078.jpeg",
      title: "Evening Glow",
      content: "An image of evening glow over the ocean.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583079.jpeg",
      title: "Coastal Adventure",
      content: "An image of a coastal adventure by the beach.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583080.jpeg",
      title: "Sunset Trail",
      content: "An image of a sunset trail in the woods.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583081.jpeg",
      title: "Whimsical Forest",
      content: "An image of a whimsical forest with vibrant colors.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583082.jpeg",
      title: "Misty Horizon",
      content: "An image of a misty horizon at dusk.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583083.jpeg",
      title: "Golden Harvest",
      content: "An image of a golden harvest in the fields.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583084.jpeg",
      title: "Dusk Reflections",
      content: "An image of dusk reflections on a quiet lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583085.jpeg",
      title: "Mountain Serenity",
      content: "An image of mountain serenity in the wilderness.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583086.jpeg",
      title: "Seaside Calm",
      content: "An image of seaside calm at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583087.jpeg",
      title: "Rays of Hope",
      content: "An image of rays of hope breaking through the clouds.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583088.jpeg",
      title: "Golden Sunset",
      content: "An image of a golden sunset illuminating the sky.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583089.jpeg",
      title: "Tranquil Oasis",
      content: "An image of a tranquil oasis in the desert.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583090.jpeg",
      title: "Peaceful Landscape",
      content: "An image of a peaceful landscape in the countryside.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583091.jpeg",
      title: "Sunset Calm",
      content: "An image of a sunset calm over the ocean.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583092.jpeg",
      title: "Ocean Breeze",
      content: "An image of an ocean breeze at twilight.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583093.jpeg",
      title: "Golden Light",
      content: "An image of golden light breaking through the trees.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583094.jpeg",
      title: "Coastal Reflections",
      content: "An image of coastal reflections at sunset.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583095.jpeg",
      title: "Serenity Bay",
      content: "An image of serenity bay at sunrise.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583096.jpeg",
      title: "Mountain Escape",
      content: "An image of a mountain escape in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583097.jpeg",
      title: "Twilight Reflections",
      content: "An image of twilight reflections on a lake.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583098.jpeg",
      title: "Sunset Bliss",
      content: "An image of sunset bliss over the horizon.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583099.jpeg",
      title: "Calm After the Storm",
      content: "An image of calm after the storm in nature.",
    },
    {
      imagePath: "/fa3ilkhairv2/assets/sample_assets/pexels-photo-2583100.jpeg",
      title: "Twilight Harmony",
      content: "An image of twilight harmony in the forest.",
    },
  ];

  // Load initial assets when the component mounts
  useEffect(() => {
    loadAssets();
  }, []);

  // Function to load assets based on the current page
  const loadAssets = () => {
    setLoading(true);
    setTimeout(() => {
      const nextAssets = allAssets.slice(page * 5, (page + 1) * 5); // Load 10 more assets
      setAssets((prevAssets) => [...prevAssets, ...nextAssets]);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    }, 4000); // Simulate loading time
  };

  // Observer to detect when the user scrolls to the bottom of the page
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        loadAssets();
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loading]);

  return (
    <div className="py-2">
      <Filter />
      <div className="flex flex-wrap justify-evenly py-6 gap-6 px-4">
        {assets.length > 0
          ? assets.map((asset, index) => <Card key={index} imagePath={asset.imagePath} title={asset.title} content={asset.content} />)
          : !loading && <p className="text-center">Scroll down to load more assets...</p>}
      </div>
      {loading && (
        <div className="flex justify-center items-center py-4">
          <LoadingAnimation />
        </div>
      )}
      <div ref={loadMoreRef} className="h-12"></div>
    </div>
  );
};

// Loading Animation Component
const LoadingAnimation = () => {
  return (
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce200"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce400"></div>
    </div>
  );
};

export default Projects;
