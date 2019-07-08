using GlobalSolusindo.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GlobalSolusindo.Business.PO
{
    public class GoalCompletion
    {
        public string ProjectName { get; set; }
        public int? SumValue { get; set; }
        public int? SumInvoice { get; set; }
        public int? SumNotInvoice { get; set; }
        public int? Complete { get; set; }
        public int? NotComplete { get; set; }
    }
}
