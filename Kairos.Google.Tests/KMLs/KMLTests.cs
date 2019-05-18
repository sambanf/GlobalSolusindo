using Microsoft.VisualStudio.TestTools.UnitTesting;
using Kairos.Google.KMLs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kairos.Google.KMLs.Tests
{
    [TestClass()]
    public class KMLTests
    {
        string route1 = @"D:\Downloads\File KML G1\Route 1.kml";
        string route2 = @"D:\Downloads\File KML G1\Route 2.kml";
        string route3 = @"D:\Downloads\File KML G1\Route 3.kml";
        string route4 = @"D:\Downloads\File KML G1\Route 4.kml";
        string route5 = @"D:\Downloads\File KML G1\Route 5.kml";

        [TestMethod()]
        public void ToStringTest()
        {
            Assert.Fail();
        }

        [TestMethod()]
        public void GetCoordinatesAsJsonArrayTest()
        {
            var kml = KMLFileReader.ConvertToKML(route5);
            var coordinates = kml.GetCoordinatesAsJsonArray();
        }
    }
}