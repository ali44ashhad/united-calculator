import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const VolumeCalculator = () => {
  const [shape, setShape] = useState("cube");
  const [inputs, setInputs] = useState({});
  const [volume, setVolume] = useState(null);

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const calculateVolume = () => {
    let result = 0;

    switch (shape) {
      case "cube":
        if (inputs.side) result = Math.pow(inputs.side, 3);
        break;
      case "cuboid":
        if (inputs.length && inputs.width && inputs.height)
          result = inputs.length * inputs.width * inputs.height;
        break;
      case "sphere":
        if (inputs.radius)
          result = (4 / 3) * Math.PI * Math.pow(inputs.radius, 3);
        break;
      case "cylinder":
        if (inputs.radius && inputs.height)
          result = Math.PI * Math.pow(inputs.radius, 2) * inputs.height;
        break;
      case "cone":
        if (inputs.radius && inputs.height)
          result =
            (1 / 3) * Math.PI * Math.pow(inputs.radius, 2) * inputs.height;
        break;
      default:
        result = 0;
    }

    setVolume(result ? result.toFixed(2) : "Invalid input");
  };

  const renderFields = () => {
    switch (shape) {
      case "cube":
        return (
          <input
            type="number"
            name="side"
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            placeholder="Side Length"
          />
        );
      case "cuboid":
        return (
          <>
            <input
              type="number"
              name="length"
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="Length"
            />
            <input
              type="number"
              name="width"
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-2"
              placeholder="Width"
            />
            <input
              type="number"
              name="height"
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-2"
              placeholder="Height"
            />
          </>
        );
      case "sphere":
        return (
          <input
            type="number"
            name="radius"
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            placeholder="Radius"
          />
        );
      case "cylinder":
      case "cone":
        return (
          <>
            <input
              type="number"
              name="radius"
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="Radius"
            />
            <input
              type="number"
              name="height"
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-2"
              placeholder="Height"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Volume Calculator | Calculate Volume of 3D Shapes Instantly
        </title>
        <meta
          name="description"
          content="Use our Volume Calculator to find the volume of 3D shapes like cubes, cylinders, cones, spheres, pyramids, and more. Accurate and fast geometry tool with formulas and visual aids."
        />
        <meta
          name="keywords"
          content="volume calculator, 3D shape volume calculator, cube volume calculator, sphere volume calculator, cone volume calculator, cylinder volume calculator, geometry calculator, solid volume formulas"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/geometry/volume-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Volume Calculator | Calculate Volume of 3D Shapes Instantly"
        />
        <meta
          property="og:description"
          content="Quickly calculate the volume of 3D geometric shapes like cubes, spheres, cones, cylinders, and pyramids using our free Volume Calculator. Includes volume formulas and step-by-step results."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/geometry/volume-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Volume Calculator",
      "url": "https://unitedcalculator.net/geometry/volume-calculator",
      "description": "This Volume Calculator allows you to calculate the volume of common 3D shapes including cubes, cylinders, cones, spheres, and pyramids. Ideal for students, teachers, and geometry learners.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
      }
    }
    `}
        </script>

        {/* JSON-LD: FAQ */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is volume in geometry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Volume is the amount of space occupied by a 3D object and is measured in cubic units. Common shapes include cubes, spheres, cones, and cylinders."
          }
        },
        {
          "@type": "Question",
          "name": "How does this Volume Calculator work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To use the Volume Calculator, select a 3D shape and enter its dimensions such as radius, height, or base. The calculator then applies the correct formula to find the volume."
          }
        }
      ]
    }
    `}
        </script>

        {/* JSON-LD: Breadcrumb */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Geometry Calculators",
          "item": "https://unitedcalculator.net/geometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Volume Calculator",
          "item": "https://unitedcalculator.net/geometry/volume-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          Volume Calculator
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Choose Shape</label>
          <select
            value={shape}
            onChange={(e) => {
              setShape(e.target.value);
              setInputs({});
              setVolume(null);
            }}
            className="w-full border rounded p-2"
          >
            <option value="cube">Cube</option>
            <option value="cuboid">Cuboid</option>
            <option value="sphere">Sphere</option>
            <option value="cylinder">Cylinder</option>
            <option value="cone">Cone</option>
          </select>
        </div>

        <div className="space-y-2">{renderFields()}</div>

        <button
          onClick={calculateVolume}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Calculate Volume
        </button>

        {volume !== null && (
          <div className="mt-4 p-4 bg-gray-50 border rounded">
            <h3 className="text-lg font-semibold text-gray-800">Result:</h3>
            <p className="text-green-600 text-xl font-bold">
              {volume} cubic units
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default VolumeCalculator;
