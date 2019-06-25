//using GlobalSolusindo.Business.PO.Queries;
//using GlobalSolusindo.DataAccess;
//using GlobalSolusindo.Identity.User.Queries;
//using Kairos.Data;
//using Kairos.Imaging;
//using Newtonsoft.Json;
//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Transactions;

//namespace GlobalSolusindo.Business.PO.DML
//{

//    public class POImportCsv
//    {
//        private tblT_PO PO;
//        private GlobalSolusindoDb db;
//        private tblM_User ActiveUser;
//        public POImportCsv(GlobalSolusindoDb db, tblT_PO po, tblM_User activeUser)
//        {
//            this.db = db;
//            this.PO = po;
//            this.ActiveUser = activeUser;
//        }

//        public List<SaveResult<PODTO>> Import(POImportDTO  pOImportDTO)
//        {
//            using (var poCreateHandler = new POCreateHandler(db, ActiveUser, new POValidator(), new POFactory(db, ActiveUser)
//                , new POQuery(db)))
//            {
//                using (var transaction = new TransactionScope())
//                {
//                    List<SaveResult<PODTO>> saveResults = new List<SaveResult<PODTO>>();

//                    var stream = new CSVConverter().GetStreamFromBase64(pOImportDTO.File);
//                    using (var reader = new StreamReader(stream))
//                    {
//                        int current = 0;
                        
//                        while (!reader.EndOfStream)
//                        { 
//                            var line = reader.ReadLine();
//                            if (current == 0)
//                            {
//                                current++;
//                                continue;
//                            }
//                            var values = line.Split(';');
//                            PODTO poDTO = CreatePODTO(values);

//                            var saveResult = poCreateHandler.Save(poDTO, dateStamp: DateTime.UtcNow);
//                            saveResults.Add(new SaveResult<PODTO>()
//                            {
//                                Message = saveResult.Message,
//                                Model = saveResult.Model?.Model,
//                                Success = saveResult.Success,
//                                ValidationResult = saveResult.ValidationResult
//                            });
//                            current++;
//                        }
//                    }
//                    transaction.Complete();

//                    return saveResults;
//                }
//            }
//        }

//        private static PODTO CreatePODTO(string[] values)
//        {
//            var pO_PK = values[0];
//            var account = values[1];
//            var projectCode = values[2];
//            var siteIDImp = values[3];
//            var siteID = values[4];
//            var siteName = values[5];
//            var dUID = values[6];
//            var pMOUniq = values[7];
//            var sOWAct = values[8];
//            var system = values[9];
//            var sOWPO = values[10];
//            var itemDesc = values[11];
//            var pONo = values[12];
//            var shipmentNo = values[13];
//            var qty = values[14];
//            var pOStatus = values[15];
//            var paymentTerm = values[16];
//            var workStatus = values[17];
//            var oADate = values[18];
//            var sSVDate = values[19];
//            var sSVAppDate = values[20];
//            var sOMSSVDate = values[21];
//            var qCAccDate = values[22];
//            var pACClusterID = values[23];
//            var pACClusterStatus = values[24];
//            var sOMPACCluster = values[25];
//            var docStatus = values[26];
//            var eSAR1stStatus = values[27];
//            var eSAR2ndStatus = values[28];
//            var remarks = values[29];


//            var poDTO = new PODTO()
//            {
//                PO_PK =  int.Parse(pO_PK??"0"),
//                Account = account,
//                ProjectCode = projectCode,
//                SiteIDImp = siteIDImp,
//                SiteID = siteID,
//                SiteName = siteName,
//                DUID = dUID,
//                PMOUniq = pMOUniq,
//                SOWAct = sOWAct,
//                System = system,
//                SOWPO = sOWPO,
//                ItemDesc = itemDesc,
//                PONo = pONo,
//                ShipmentNo = shipmentNo,
//                Qty = int.Parse(qty ?? "0"),
//                POStatus = pOStatus,
//                PaymentTerm = paymentTerm,
//                WorkStatus = workStatus,

//                //OADate = DateTime.Parse(oADate),
//                //SSVDate = DateTime.Parse(sSVDate),
//                //SSVAppDate = DateTime.Parse(sSVAppDate),
//                //SOMSSVDate = DateTime.Parse(sOMSSVDate),
//                //QCAccDate = DateTime.Parse(qCAccDate),
//                //PACClusterID = pACClusterID,
//                //PACClusterStatus = pACClusterStatus,
//                //SOMPACCluster = sOMPACCluster,
//                //DocStatus = docStatus,
//                //ESAR1stStatus = eSAR1stStatus,
//                //ESAR2ndStatus = eSAR2ndStatus,
//                Remarks = remarks
//            };
//            return poDTO;
//        }
//    }
//}
