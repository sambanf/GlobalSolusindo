using Newtonsoft.Json;
using System.Collections.Generic;

namespace Kairos.Google.KMLs
{
    public class Coordinate
    {
        public Coordinate(double latitude, double longitude)
        {
            Latitude = latitude;
            Longitude = longitude;
        }

        [JsonProperty("latitude")]
        public double Latitude { get; set; }

        [JsonProperty("longitude")]
        public double Longitude { get; set; }
    }

    public class LineString
    {
        [JsonProperty("tessellate")]
        public int Tessellate { get; set; }

        [JsonProperty("coordinates")]
        public List<Coordinate> Coordinates { get; set; } = new List<Coordinate>();

        //[JsonProperty("coordinates")]
        //public string Coordinates { get; set; }
    }

    public class Placemark
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        public LineString LineString { get; set; }
    }

    public class Document
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("placemarks")]
        public List<Placemark> Placemarks { get; set; } = new List<Placemark>();
    }

    public class KML
    {
        [JsonProperty("document")]
        public Document Document { get; set; }


        public string GetCoordinatesAsJsonArray()
        {
            var list = new List<List<Coordinate>>();

            foreach (var placemark in this.Document.Placemarks)
            {
                list.Add(placemark.LineString.Coordinates);
            }

            return JsonConvert.SerializeObject(list);
        }

        public List<List<Coordinate>> GetCoordinates()
        {
            var list = new List<List<Coordinate>>();

            foreach (var placemark in this.Document.Placemarks)
            {
                list.Add(placemark.LineString.Coordinates);
            }

            return list;
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}