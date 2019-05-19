using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Xml;

namespace Kairos.Google.KMLs
{
    public class KMLFileReader
    {
        public XmlDocument ReadFileAsXml(string path)
        {
            string xml = File.ReadAllText(path);
            XmlDocument xmlDocument = new XmlDocument();
            xmlDocument.LoadXml(xml);

            return xmlDocument;
        }

        public string ReadFileAsXmlString(string path)
        {
            string xmlString = File.ReadAllText(path);
            return xmlString;
        }

        public static string ConvertToJson(string path, bool removeKmlNamespaceNameProperty = true)
        {
            KMLFileReader reader = new KMLFileReader();

            string json = string.Empty;
            var xml = reader.ReadFileAsXml(path);

            json = JsonConvert.SerializeXmlNode(xml);

            if (removeKmlNamespaceNameProperty)
            {
                json = json.Replace("kml:", "");
            }

            return json;
        }

        public static JObject ConvertToJObject(string path)
        {
            string json = ConvertToJson(path);
            return JObject.Parse(json);
        }

        public static KML ConvertToKML(string path)
        {
            JObject jObject = ConvertToJObject(path);

            string documentName = jObject["kml"]["Document"]["name"].ToString();
            List<Placemark> placemarks = GetPlacemarks(jObject);
            KML kml = new KML()
            {
                Document = new Document()
                {
                    Name = documentName,
                    Placemarks = placemarks
                }
            };

            return kml;
        }

        public static List<Placemark> GetPlacemarks(JObject jObject)
        {
            var jPlacemark = jObject["kml"]["Document"]["Placemark"];

            List<Placemark> placemarks = new List<Placemark>();

            if (jPlacemark is JArray)
            {
                foreach (var pm in jPlacemark)
                {
                    Placemark placemark = new Placemark();
                    placemark.Name = pm["name"].ToString();
                    placemark.LineString = new LineString
                    {
                        Tessellate = (int)pm["LineString"]["tessellate"],
                        Coordinates = GetCoordinates(pm["LineString"]["coordinates"])
                    };


                    placemarks.Add(placemark);
                }
            }
            else
            {
                Placemark placemark = new Placemark();
                placemark.Name = jPlacemark["name"].ToString();
                placemark.LineString = new LineString
                {
                    Tessellate = (int)jPlacemark["LineString"]["tessellate"],
                    Coordinates = GetCoordinates(jPlacemark["LineString"]["coordinates"])
                };
                placemarks.Add(placemark);

            }
            return placemarks;
        }

        public static List<Coordinate> GetCoordinates(JToken jCoordinate)
        {
            var coordinatesString = jCoordinate.ToString();

            coordinatesString = coordinatesString.Replace("\n", "").Replace("\t", "");
            var coordinateArray = coordinatesString.Split(new string[] { ",0 " }, StringSplitOptions.RemoveEmptyEntries);

            var coordinates = new List<Coordinate>();

            foreach (var coord in coordinateArray)
            {
                var latlon = coord.Split(new string[] { "," }, StringSplitOptions.RemoveEmptyEntries);
                var lat = Convert.ToDouble(latlon[1], new CultureInfo("en-US"));
                var lon = Convert.ToDouble(latlon[0], new CultureInfo("en-US"));

                var coordinate = new Coordinate(lat, lon);

                coordinates.Add(coordinate);
            }

            return coordinates;
        }
    }
}
