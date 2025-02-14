﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GlobalSolusindo.DataAccess
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class GlobalSolusindoDb : DbContext
    {
        public GlobalSolusindoDb()
            : base("name=GlobalSolusindoDb")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<DocumentNumber> DocumentNumbers { get; set; }
        public virtual DbSet<tblM_Area> tblM_Area { get; set; }
        public virtual DbSet<tblM_Aset> tblM_Aset { get; set; }
        public virtual DbSet<tblM_AsetKategori> tblM_AsetKategori { get; set; }
        public virtual DbSet<tblM_AuthParam> tblM_AuthParam { get; set; }
        public virtual DbSet<tblM_BTS> tblM_BTS { get; set; }
        public virtual DbSet<tblM_BTSStatus> tblM_BTSStatus { get; set; }
        public virtual DbSet<tblM_BTSTechnology> tblM_BTSTechnology { get; set; }
        public virtual DbSet<tblM_Cabang> tblM_Cabang { get; set; }
        public virtual DbSet<tblM_CostKategori> tblM_CostKategori { get; set; }
        public virtual DbSet<tblM_DeliveryArea> tblM_DeliveryArea { get; set; }
        public virtual DbSet<tblM_IssueType> tblM_IssueType { get; set; }
        public virtual DbSet<tblM_IzinCutiStatus> tblM_IzinCutiStatus { get; set; }
        public virtual DbSet<tblM_KategoriJabatan> tblM_KategoriJabatan { get; set; }
        public virtual DbSet<tblM_Kota> tblM_Kota { get; set; }
        public virtual DbSet<tblM_MappingRoleToRoleGroup> tblM_MappingRoleToRoleGroup { get; set; }
        public virtual DbSet<tblM_MappingUserToAuthParam> tblM_MappingUserToAuthParam { get; set; }
        public virtual DbSet<tblM_MappingUserToRoleGroup> tblM_MappingUserToRoleGroup { get; set; }
        public virtual DbSet<tblM_Menu> tblM_Menu { get; set; }
        public virtual DbSet<tblM_Operator> tblM_Operator { get; set; }
        public virtual DbSet<tblM_PMHistori> tblM_PMHistori { get; set; }
        public virtual DbSet<tblM_Project> tblM_Project { get; set; }
        public virtual DbSet<tblM_Role> tblM_Role { get; set; }
        public virtual DbSet<tblM_RoleGroup> tblM_RoleGroup { get; set; }
        public virtual DbSet<tblM_Status> tblM_Status { get; set; }
        public virtual DbSet<tblM_Technology> tblM_Technology { get; set; }
        public virtual DbSet<tblM_TipePekerjaan> tblM_TipePekerjaan { get; set; }
        public virtual DbSet<tblM_User> tblM_User { get; set; }
        public virtual DbSet<tblM_Vendor> tblM_Vendor { get; set; }
        public virtual DbSet<tblT_AsetHistori> tblT_AsetHistori { get; set; }
        public virtual DbSet<tblT_Cost> tblT_Cost { get; set; }
        public virtual DbSet<tblT_IzinCuti> tblT_IzinCuti { get; set; }
        public virtual DbSet<tblT_PO> tblT_PO { get; set; }
        public virtual DbSet<tblT_SOWAssign> tblT_SOWAssign { get; set; }
        public virtual DbSet<tblT_SOWIssue> tblT_SOWIssue { get; set; }
        public virtual DbSet<tblT_SOWResult> tblT_SOWResult { get; set; }
        public virtual DbSet<tblT_SOWStatus> tblT_SOWStatus { get; set; }
        public virtual DbSet<tblT_SOWTrack> tblT_SOWTrack { get; set; }
        public virtual DbSet<tblT_SOWTrackResult> tblT_SOWTrackResult { get; set; }
        public virtual DbSet<tblT_UserHistori> tblT_UserHistori { get; set; }
        public virtual DbSet<tblT_UserPayroll> tblT_UserPayroll { get; set; }
        public virtual DbSet<tblM_CategoryContract> tblM_CategoryContract { get; set; }
        public virtual DbSet<tblM_Gender> tblM_Gender { get; set; }
        public virtual DbSet<tblM_MaritalStatus> tblM_MaritalStatus { get; set; }
        public virtual DbSet<tblM_Religion> tblM_Religion { get; set; }
        public virtual DbSet<tblM_UserDetail> tblM_UserDetail { get; set; }
        public virtual DbSet<tblT_SOW> tblT_SOW { get; set; }
        public virtual DbSet<tblM_SOWName> tblM_SOWName { get; set; }
        public virtual DbSet<tblT_LogActivity> tblT_LogActivity { get; set; }
        public virtual DbSet<tblT_CheckIn> tblT_CheckIn { get; set; }
        public virtual DbSet<vw_SOWLink> vw_SOWLink { get; set; }
        public virtual DbSet<vw_SOWIssue> vw_SOWIssue { get; set; }
        public virtual DbSet<vw_SOWViewAll> vw_SOWViewAll { get; set; }
    
        public virtual ObjectResult<GetTaskList_Result> GetTaskList(Nullable<int> userID, Nullable<int> statusSOW)
        {
            var userIDParameter = userID.HasValue ?
                new ObjectParameter("userID", userID) :
                new ObjectParameter("userID", typeof(int));
    
            var statusSOWParameter = statusSOW.HasValue ?
                new ObjectParameter("statusSOW", statusSOW) :
                new ObjectParameter("statusSOW", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetTaskList_Result>("GetTaskList", userIDParameter, statusSOWParameter);
        }
    
        public virtual ObjectResult<GetTimesheetDaily_Result> GetTimesheetDaily(Nullable<int> userID, Nullable<int> month, Nullable<int> year, Nullable<int> day)
        {
            var userIDParameter = userID.HasValue ?
                new ObjectParameter("userID", userID) :
                new ObjectParameter("userID", typeof(int));
    
            var monthParameter = month.HasValue ?
                new ObjectParameter("month", month) :
                new ObjectParameter("month", typeof(int));
    
            var yearParameter = year.HasValue ?
                new ObjectParameter("year", year) :
                new ObjectParameter("year", typeof(int));
    
            var dayParameter = day.HasValue ?
                new ObjectParameter("day", day) :
                new ObjectParameter("day", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetTimesheetDaily_Result>("GetTimesheetDaily", userIDParameter, monthParameter, yearParameter, dayParameter);
        }
    
        public virtual ObjectResult<Nullable<System.DateTime>> GetTimesheetMonthly(Nullable<int> userID, Nullable<int> month, Nullable<int> year)
        {
            var userIDParameter = userID.HasValue ?
                new ObjectParameter("userID", userID) :
                new ObjectParameter("userID", typeof(int));
    
            var monthParameter = month.HasValue ?
                new ObjectParameter("month", month) :
                new ObjectParameter("month", typeof(int));
    
            var yearParameter = year.HasValue ?
                new ObjectParameter("year", year) :
                new ObjectParameter("year", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<System.DateTime>>("GetTimesheetMonthly", userIDParameter, monthParameter, yearParameter);
        }
    
        public virtual ObjectResult<GetTimesheetMonthlyV2_Result> GetTimesheetMonthlyV2(Nullable<int> userId, Nullable<int> month, Nullable<int> year)
        {
            var userIdParameter = userId.HasValue ?
                new ObjectParameter("userId", userId) :
                new ObjectParameter("userId", typeof(int));
    
            var monthParameter = month.HasValue ?
                new ObjectParameter("month", month) :
                new ObjectParameter("month", typeof(int));
    
            var yearParameter = year.HasValue ?
                new ObjectParameter("year", year) :
                new ObjectParameter("year", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetTimesheetMonthlyV2_Result>("GetTimesheetMonthlyV2", userIdParameter, monthParameter, yearParameter);
        }
    
        public virtual ObjectResult<usp_GetActivities_Result> usp_GetActivities(Nullable<int> user_FK)
        {
            var user_FKParameter = user_FK.HasValue ?
                new ObjectParameter("User_FK", user_FK) :
                new ObjectParameter("User_FK", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetActivities_Result>("usp_GetActivities", user_FKParameter);
        }
    
        public virtual ObjectResult<usp_GetDailyTask_Result> usp_GetDailyTask(string keyword)
        {
            var keywordParameter = keyword != null ?
                new ObjectParameter("keyword", keyword) :
                new ObjectParameter("keyword", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetDailyTask_Result>("usp_GetDailyTask", keywordParameter);
        }
    
        public virtual ObjectResult<usp_GetNetworkTask_Result> usp_GetNetworkTask(Nullable<int> userFk, Nullable<int> sowFk)
        {
            var userFkParameter = userFk.HasValue ?
                new ObjectParameter("userFk", userFk) :
                new ObjectParameter("userFk", typeof(int));
    
            var sowFkParameter = sowFk.HasValue ?
                new ObjectParameter("sowFk", sowFk) :
                new ObjectParameter("sowFk", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetNetworkTask_Result>("usp_GetNetworkTask", userFkParameter, sowFkParameter);
        }
    
        public virtual ObjectResult<usp_GetSowAssign_Result> usp_GetSowAssign(Nullable<int> sOW_FK)
        {
            var sOW_FKParameter = sOW_FK.HasValue ?
                new ObjectParameter("SOW_FK", sOW_FK) :
                new ObjectParameter("SOW_FK", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetSowAssign_Result>("usp_GetSowAssign", sOW_FKParameter);
        }
    
        public virtual ObjectResult<string> usp_GetDocNumber(string documentCode, Nullable<int> updateCurrentnumber)
        {
            var documentCodeParameter = documentCode != null ?
                new ObjectParameter("documentCode", documentCode) :
                new ObjectParameter("documentCode", typeof(string));
    
            var updateCurrentnumberParameter = updateCurrentnumber.HasValue ?
                new ObjectParameter("updateCurrentnumber", updateCurrentnumber) :
                new ObjectParameter("updateCurrentnumber", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("usp_GetDocNumber", documentCodeParameter, updateCurrentnumberParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> Get_Count_Po(Nullable<System.DateTime> star, Nullable<System.DateTime> end)
        {
            var starParameter = star.HasValue ?
                new ObjectParameter("star", star) :
                new ObjectParameter("star", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("Get_Count_Po", starParameter, endParameter);
        }
    
        public virtual ObjectResult<GetDashboardGoalCompletion_Result> GetDashboardGoalCompletion(Nullable<System.DateTime> start, Nullable<System.DateTime> end)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetDashboardGoalCompletion_Result>("GetDashboardGoalCompletion", startParameter, endParameter);
        }
    
        public virtual ObjectResult<GetDashboardRevenueCost_Result> GetDashboardRevenueCost(Nullable<System.DateTime> start, Nullable<System.DateTime> end)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetDashboardRevenueCost_Result>("GetDashboardRevenueCost", startParameter, endParameter);
        }
    
        public virtual ObjectResult<GetDashboardRevenueCostProfit_Result> GetDashboardRevenueCostProfit(Nullable<System.DateTime> start, Nullable<System.DateTime> end, Nullable<int> project)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            var projectParameter = project.HasValue ?
                new ObjectParameter("project", project) :
                new ObjectParameter("project", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetDashboardRevenueCostProfit_Result>("GetDashboardRevenueCostProfit", startParameter, endParameter, projectParameter);
        }
    
        public virtual ObjectResult<GetDashboardValue_Result> GetDashboardValue(Nullable<System.DateTime> start, Nullable<System.DateTime> end)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetDashboardValue_Result>("GetDashboardValue", startParameter, endParameter);
        }
    
        public virtual ObjectResult<GetGoalCompletion_Result> GetGoalCompletion(Nullable<System.DateTime> start, Nullable<System.DateTime> end)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetGoalCompletion_Result>("GetGoalCompletion", startParameter, endParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> GetTotalJumlahInvoice(Nullable<System.DateTime> start, Nullable<System.DateTime> end)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("GetTotalJumlahInvoice", startParameter, endParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> GetTotalJumlahPo(Nullable<System.DateTime> start, Nullable<System.DateTime> end)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("GetTotalJumlahPo", startParameter, endParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> GetTotalValuePO(Nullable<System.DateTime> start, Nullable<System.DateTime> end)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("GetTotalValuePO", startParameter, endParameter);
        }
    
        public virtual ObjectResult<GetDashboardGoalCompletionByProject_Result> GetDashboardGoalCompletionByProject(Nullable<System.DateTime> start, Nullable<System.DateTime> end, Nullable<int> project)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            var projectParameter = project.HasValue ?
                new ObjectParameter("project", project) :
                new ObjectParameter("project", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetDashboardGoalCompletionByProject_Result>("GetDashboardGoalCompletionByProject", startParameter, endParameter, projectParameter);
        }
    
        public virtual ObjectResult<GetDashboardRevenueCostByProject_Result> GetDashboardRevenueCostByProject(Nullable<System.DateTime> start, Nullable<System.DateTime> end, Nullable<int> project)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            var projectParameter = project.HasValue ?
                new ObjectParameter("project", project) :
                new ObjectParameter("project", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetDashboardRevenueCostByProject_Result>("GetDashboardRevenueCostByProject", startParameter, endParameter, projectParameter);
        }
    
        public virtual ObjectResult<GetDashboardRevenueCostProfitFilterByProject_Result> GetDashboardRevenueCostProfitFilterByProject(Nullable<System.DateTime> start, Nullable<System.DateTime> end, Nullable<int> project)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            var projectParameter = project.HasValue ?
                new ObjectParameter("project", project) :
                new ObjectParameter("project", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetDashboardRevenueCostProfitFilterByProject_Result>("GetDashboardRevenueCostProfitFilterByProject", startParameter, endParameter, projectParameter);
        }
    
        public virtual ObjectResult<GetDashboardValueByProject_Result> GetDashboardValueByProject(Nullable<System.DateTime> start, Nullable<System.DateTime> end, Nullable<int> project)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            var projectParameter = project.HasValue ?
                new ObjectParameter("project", project) :
                new ObjectParameter("project", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetDashboardValueByProject_Result>("GetDashboardValueByProject", startParameter, endParameter, projectParameter);
        }
    
        public virtual ObjectResult<GetGoalCompetionByProject_Result> GetGoalCompetionByProject(Nullable<System.DateTime> start, Nullable<System.DateTime> end, Nullable<int> project)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            var projectParameter = project.HasValue ?
                new ObjectParameter("project", project) :
                new ObjectParameter("project", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetGoalCompetionByProject_Result>("GetGoalCompetionByProject", startParameter, endParameter, projectParameter);
        }
    
        public virtual ObjectResult<GetSalesReportByProject_Result> GetSalesReportByProject(Nullable<System.DateTime> start, Nullable<System.DateTime> end, Nullable<int> vendor)
        {
            var startParameter = start.HasValue ?
                new ObjectParameter("start", start) :
                new ObjectParameter("start", typeof(System.DateTime));
    
            var endParameter = end.HasValue ?
                new ObjectParameter("end", end) :
                new ObjectParameter("end", typeof(System.DateTime));
    
            var vendorParameter = vendor.HasValue ?
                new ObjectParameter("Vendor", vendor) :
                new ObjectParameter("Vendor", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetSalesReportByProject_Result>("GetSalesReportByProject", startParameter, endParameter, vendorParameter);
        }
    
        public virtual ObjectResult<usp_GetSOWViewAll_Result> usp_GetSOWViewAll()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<usp_GetSOWViewAll_Result>("usp_GetSOWViewAll");
        }
    
        public virtual ObjectResult<GetDropdownlistTipePekerjaanBySowAssign_Result> GetDropdownlistTipePekerjaanBySowAssign(Nullable<int> sowAssign_PK)
        {
            var sowAssign_PKParameter = sowAssign_PK.HasValue ?
                new ObjectParameter("sowAssign_PK", sowAssign_PK) :
                new ObjectParameter("sowAssign_PK", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetDropdownlistTipePekerjaanBySowAssign_Result>("GetDropdownlistTipePekerjaanBySowAssign", sowAssign_PKParameter);
        }
    
        public virtual ObjectResult<GetAsetAvaible_Result> GetAsetAvaible()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetAsetAvaible_Result>("GetAsetAvaible");
        }
    
        public virtual ObjectResult<GetTaskApprovalListLatest_Result> GetTaskApprovalListLatest(string keyword)
        {
            var keywordParameter = keyword != null ?
                new ObjectParameter("keyword", keyword) :
                new ObjectParameter("keyword", typeof(string));
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetTaskApprovalListLatest_Result>("GetTaskApprovalListLatest", keywordParameter);
        }
    
        public virtual ObjectResult<GetTaskApprovalLatest_Result> GetTaskApprovalLatest()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetTaskApprovalLatest_Result>("GetTaskApprovalLatest");
        }
    
        public virtual ObjectResult<GetTaskListLatest_Result> GetTaskListLatest()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetTaskListLatest_Result>("GetTaskListLatest");
        }
    
        public virtual ObjectResult<Nullable<int>> sp_SOWStatusUpdate(Nullable<int> sOWAssignPK, Nullable<int> userFK)
        {
            var sOWAssignPKParameter = sOWAssignPK.HasValue ?
                new ObjectParameter("SOWAssignPK", sOWAssignPK) :
                new ObjectParameter("SOWAssignPK", typeof(int));
    
            var userFKParameter = userFK.HasValue ?
                new ObjectParameter("UserFK", userFK) :
                new ObjectParameter("UserFK", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("sp_SOWStatusUpdate", sOWAssignPKParameter, userFKParameter);
        }
    
        public virtual ObjectResult<GetPeriodeTaskEngineer_Result> GetPeriodeTaskEngineer()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetPeriodeTaskEngineer_Result>("GetPeriodeTaskEngineer");
        }
    
        public virtual ObjectResult<Nullable<int>> sp_SOWStatusUpdateApprove(Nullable<int> checkinpk, Nullable<int> userFK)
        {
            var checkinpkParameter = checkinpk.HasValue ?
                new ObjectParameter("checkinpk", checkinpk) :
                new ObjectParameter("checkinpk", typeof(int));
    
            var userFKParameter = userFK.HasValue ?
                new ObjectParameter("UserFK", userFK) :
                new ObjectParameter("UserFK", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("sp_SOWStatusUpdateApprove", checkinpkParameter, userFKParameter);
        }
    }
}
