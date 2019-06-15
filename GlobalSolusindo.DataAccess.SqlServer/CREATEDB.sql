USE [GlobalSolusindo]
GO
/****** Object:  UserDefinedFunction [dbo].[getTechnology]    Script Date: 15/06/2019 16:45:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[getTechnology]
(
    @SOW_PK int
)
RETURNS nvarchar(max)
AS
BEGIN
    declare @str nvarchar(max)
    set @str = STUFF((select ', '+T.Title from tblT_SOW S JOIN tblT_SOWTrack ST ON
    ST.SOW_FK=S.SOW_PK 
	JOIN tblM_Technology T ON T.Technology_PK=ST.Technology_FK
	where S.SOW_PK=@SOW_PK FOR XML PATH('')),
    1, 1, '')
    RETURN @str
END


GO
/****** Object:  Table [dbo].[tblM_Area]    Script Date: 15/06/2019 16:45:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Area](
	[Area_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Area] PRIMARY KEY CLUSTERED 
(
	[Area_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Aset]    Script Date: 15/06/2019 16:45:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Aset](
	[Aset_PK] [int] IDENTITY(1,1) NOT NULL,
	[KategoriAset_FK] [int] NOT NULL,
	[AsetID] [nvarchar](500) NOT NULL,
	[Name] [nvarchar](500) NOT NULL,
	[FilePhoto] [varbinary](max) NULL,
	[Description] [nvarchar](500) NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Aset] PRIMARY KEY CLUSTERED 
(
	[Aset_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_AsetKategori]    Script Date: 15/06/2019 16:45:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_AsetKategori](
	[AsetKategori_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_KategoriAset] PRIMARY KEY CLUSTERED 
(
	[AsetKategori_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_AuthParam]    Script Date: 15/06/2019 16:45:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_AuthParam](
	[AuthParam_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_AuthParam] PRIMARY KEY CLUSTERED 
(
	[AuthParam_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_BTS]    Script Date: 15/06/2019 16:45:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_BTS](
	[BTS_PK] [int] IDENTITY(1,1) NOT NULL,
	[CustomerSite] [nvarchar](100) NULL,
	[TowerID] [nvarchar](100) NOT NULL,
	[CellID] [nvarchar](100) NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Operator_FK] [int] NOT NULL,
	[StatusBTS_FK] [int] NULL,
	[Longitude] [nvarchar](100) NULL,
	[Latitude] [nvarchar](100) NULL,
	[Area_FK] [int] NOT NULL,
	[Alamat] [nvarchar](500) NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_BTS] PRIMARY KEY CLUSTERED 
(
	[BTS_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_BTSStatus]    Script Date: 15/06/2019 16:45:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_BTSStatus](
	[BTSStatus_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_StatusBTS] PRIMARY KEY CLUSTERED 
(
	[BTSStatus_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_BTSTechnology]    Script Date: 15/06/2019 16:45:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_BTSTechnology](
	[BTSTechnology_PK] [int] IDENTITY(1,1) NOT NULL,
	[BTS_FK] [int] NOT NULL,
	[Technology_FK] [int] NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_BTSTechnology] PRIMARY KEY CLUSTERED 
(
	[BTSTechnology_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Cabang]    Script Date: 15/06/2019 16:45:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Cabang](
	[Cabang_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Cabang] PRIMARY KEY CLUSTERED 
(
	[Cabang_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_CostKategori]    Script Date: 15/06/2019 16:45:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_CostKategori](
	[CostKategori_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[Order] [int] NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_CostCategory] PRIMARY KEY CLUSTERED 
(
	[CostKategori_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_DeliveryArea]    Script Date: 15/06/2019 16:45:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_DeliveryArea](
	[DeliveryArea_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_DeliveryArea] PRIMARY KEY CLUSTERED 
(
	[DeliveryArea_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_IssueType]    Script Date: 15/06/2019 16:45:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_IssueType](
	[IssueType_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_IssueType] PRIMARY KEY CLUSTERED 
(
	[IssueType_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_IzinCutiStatus]    Script Date: 15/06/2019 16:45:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_IzinCutiStatus](
	[IzinCutiStatus_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_IzinCutiStatus] PRIMARY KEY CLUSTERED 
(
	[IzinCutiStatus_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_KategoriJabatan]    Script Date: 15/06/2019 16:45:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_KategoriJabatan](
	[KategoriJabatan_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_KategoriJabatan] PRIMARY KEY CLUSTERED 
(
	[KategoriJabatan_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Kota]    Script Date: 15/06/2019 16:45:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Kota](
	[Kota_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Kota] PRIMARY KEY CLUSTERED 
(
	[Kota_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_MappingRoleToRoleGroup]    Script Date: 15/06/2019 16:45:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_MappingRoleToRoleGroup](
	[Role_PK] [int] NOT NULL,
	[RoleGroup_PK] [int] NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_MappingRoleToRoleGroup] PRIMARY KEY CLUSTERED 
(
	[Role_PK] ASC,
	[RoleGroup_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_MappingUserToAuthParam]    Script Date: 15/06/2019 16:45:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_MappingUserToAuthParam](
	[User_PK] [int] NOT NULL,
	[AuthParam_PK] [int] NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_MappingUserToAuthParam] PRIMARY KEY CLUSTERED 
(
	[User_PK] ASC,
	[AuthParam_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_MappingUserToRoleGroup]    Script Date: 15/06/2019 16:45:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_MappingUserToRoleGroup](
	[User_PK] [int] NOT NULL,
	[RoleGroup_PK] [int] NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_MappingUserToRoleGroup] PRIMARY KEY CLUSTERED 
(
	[User_PK] ASC,
	[RoleGroup_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Menu]    Script Date: 15/06/2019 16:45:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Menu](
	[Menu_PK] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Caption] [nvarchar](50) NOT NULL,
	[ParentId] [int] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Menu] PRIMARY KEY CLUSTERED 
(
	[Menu_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Operator]    Script Date: 15/06/2019 16:45:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Operator](
	[Operator_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Operator] PRIMARY KEY CLUSTERED 
(
	[Operator_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_PMHistori]    Script Date: 15/06/2019 16:45:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_PMHistori](
	[PMHistori_PK] [int] IDENTITY(1,1) NOT NULL,
	[PMUser_FK] [int] NULL,
	[Project_FK] [int] NULL,
	[TglMulai] [datetime] NOT NULL,
	[TglSelesai] [datetime] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_PMHistori] PRIMARY KEY CLUSTERED 
(
	[PMHistori_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Project]    Script Date: 15/06/2019 16:45:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Project](
	[Project_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Operator_FK] [int] NULL,
	[DeliveryArea_FK] [int] NULL,
	[Vendor_FK] [int] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Project] PRIMARY KEY CLUSTERED 
(
	[Project_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Role]    Script Date: 15/06/2019 16:45:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Role](
	[Role_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Role] PRIMARY KEY CLUSTERED 
(
	[Role_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_RoleGroup]    Script Date: 15/06/2019 16:45:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_RoleGroup](
	[RoleGroup_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_RoleGroup] PRIMARY KEY CLUSTERED 
(
	[RoleGroup_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Status]    Script Date: 15/06/2019 16:45:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Status](
	[Status_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_tblM_Status] PRIMARY KEY CLUSTERED 
(
	[Status_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Technology]    Script Date: 15/06/2019 16:45:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Technology](
	[Technology_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Teknologi] PRIMARY KEY CLUSTERED 
(
	[Technology_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_User]    Script Date: 15/06/2019 16:45:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_User](
	[User_PK] [int] IDENTITY(1,1) NOT NULL,
	[UserDetail_FK] [int] NOT NULL,
	[KategoriJabatan_FK] [int] NOT NULL,
	[Username] [nvarchar](200) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_User] PRIMARY KEY CLUSTERED 
(
	[User_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_UserDetail]    Script Date: 15/06/2019 16:45:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_UserDetail](
	[UserDetail_PK] [int] IDENTITY(1,1) NOT NULL,
	[UserCode] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[TglLahir] [date] NULL,
	[FilePhoto] [varbinary](max) NULL,
	[NoKTP] [nvarchar](20) NULL,
	[NoHP] [nvarchar](100) NULL,
	[Email] [nvarchar](100) NULL,
	[PersonalEmail] [nvarchar](100) NULL,
	[Address] [nvarchar](500) NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_UserDetail] PRIMARY KEY CLUSTERED 
(
	[UserDetail_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Vendor]    Script Date: 15/06/2019 16:45:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Vendor](
	[Vendor_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_Vendor] PRIMARY KEY CLUSTERED 
(
	[Vendor_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_AsetHistori]    Script Date: 15/06/2019 16:45:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_AsetHistori](
	[AsetHistori_PK] [int] IDENTITY(1,1) NOT NULL,
	[UserDetail_FK] [int] NOT NULL,
	[Aset_FK] [int] NOT NULL,
	[TglMulai] [datetime] NOT NULL,
	[TglSelesai] [datetime] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_AsetHistori] PRIMARY KEY CLUSTERED 
(
	[AsetHistori_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_CheckIn]    Script Date: 15/06/2019 16:45:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_CheckIn](
	[CheckIn_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOWAssign_FK] [int] NOT NULL,
	[File] [varbinary](max) NULL,
	[WaktuCheckIn] [datetime] NOT NULL,
	[LongitudeCheckIn] [nvarchar](100) NOT NULL,
	[LatitudeCheckIn] [nvarchar](100) NOT NULL,
	[MCCCheckIn] [nvarchar](100) NOT NULL,
	[MNCCheckIn] [nvarchar](100) NOT NULL,
	[LACCheckIn] [nvarchar](100) NOT NULL,
	[CellIDCheckIn] [nvarchar](100) NOT NULL,
	[WaktuCheckOut] [datetime] NULL,
	[LongitudeCheckOut] [nvarchar](100) NULL,
	[LatitudeCheckOut] [nvarchar](100) NULL,
	[MCCCheckOut] [nvarchar](100) NULL,
	[MNCCheckOut] [nvarchar](100) NULL,
	[LACCheckOut] [nvarchar](100) NULL,
	[CellIDCheckOut] [nvarchar](100) NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_CheckInRigger] PRIMARY KEY CLUSTERED 
(
	[CheckIn_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_Cost]    Script Date: 15/06/2019 16:45:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_Cost](
	[Cost_PK] [int] IDENTITY(1,1) NOT NULL,
	[KategoriCost_FK] [int] NULL,
	[SOW_FK] [int] NULL,
	[Nominal] [float] NOT NULL,
	[Deskripsi] [nvarchar](250) NULL,
	[Tanggal] [datetime] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_Cost] PRIMARY KEY CLUSTERED 
(
	[Cost_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_IzinCuti]    Script Date: 15/06/2019 16:45:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_IzinCuti](
	[IzinCuti_PK] [int] IDENTITY(1,1) NOT NULL,
	[User_FK] [int] NOT NULL,
	[TglMulai] [datetime] NULL,
	[TglSelesai] [datetime] NULL,
	[Alasan] [nvarchar](500) NOT NULL,
	[FilePendukung] [varbinary](max) NULL,
	[ApprovalUserDetail_FK] [int] NULL,
	[IzinCutiStatus_FK] [int] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_IzinCuti] PRIMARY KEY CLUSTERED 
(
	[IzinCuti_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_PO]    Script Date: 15/06/2019 16:45:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_PO](
	[PO_PK] [int] IDENTITY(1,1) NOT NULL,
	[Account] [nvarchar](200) NULL,
	[ProjectCode] [nvarchar](200) NULL,
	[SiteIDImp] [nvarchar](200) NULL,
	[SiteID] [nvarchar](50) NULL,
	[SiteName] [nvarchar](200) NULL,
	[DUID] [nvarchar](200) NOT NULL,
	[PMOUniq] [nvarchar](200) NULL,
	[SOWAct] [nvarchar](200) NULL,
	[System] [nvarchar](50) NULL,
	[SOWPO] [nvarchar](200) NOT NULL,
	[ItemDesc] [nvarchar](max) NULL,
	[PONo] [nvarchar](200) NOT NULL,
	[ShipmentNo] [nvarchar](50) NULL,
	[Qty] [int] NOT NULL,
	[POStatus] [nvarchar](200) NULL,
	[PaymentTerm] [nvarchar](500) NULL,
	[WorkStatus] [nvarchar](200) NULL,
	[OADate] [datetime] NULL,
	[SSVDate] [datetime] NULL,
	[SSVAppDate] [datetime] NULL,
	[SOMSSVDate] [datetime] NULL,
	[QCAccDate] [datetime] NULL,
	[PACClusterID] [nvarchar](200) NULL,
	[PACClusterStatus] [nvarchar](200) NULL,
	[SOMPACCluster] [nvarchar](200) NULL,
	[DocStatus] [nvarchar](200) NULL,
	[ESAR1stStatus] [nvarchar](200) NULL,
	[ESAR2ndStatus] [nvarchar](200) NULL,
	[Remarks] [nvarchar](max) NULL,
	[CreatedBy] [nvarchar](200) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](200) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_PO] PRIMARY KEY CLUSTERED 
(
	[PO_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOW]    Script Date: 15/06/2019 16:45:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOW](
	[SOW_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOWName] [nvarchar](500) NULL,
	[BTS_FK] [int] NULL,
	[Project_FK] [int] NULL,
	[TglMulai] [datetime] NULL,
	[TglSelesai] [datetime] NULL,
	[StatusSOW_FK] [int] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_SOW] PRIMARY KEY CLUSTERED 
(
	[SOW_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWAssign]    Script Date: 15/06/2019 16:45:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOWAssign](
	[SOWAssign_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOW_FK] [int] NULL,
	[User_FK] [int] NULL,
	[KategoriJabatan_FK] [int] NULL,
	[TglMulai] [datetime] NULL,
	[TglSelesai] [datetime] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_SOWAssign] PRIMARY KEY CLUSTERED 
(
	[SOWAssign_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWIssue]    Script Date: 15/06/2019 16:45:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOWIssue](
	[SOWIssue_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOWAssign_FK] [int] NULL,
	[IssueType_FK] [int] NULL,
	[Description] [nvarchar](500) NULL,
	[Foto] [varbinary](max) NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_SOWIssue] PRIMARY KEY CLUSTERED 
(
	[SOWIssue_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWResult]    Script Date: 15/06/2019 16:45:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOWResult](
	[SOWResult_PK] [int] IDENTITY(1,1) NOT NULL,
	[CheckIn_FK] [int] NOT NULL,
	[FileUrl] [nvarchar](max) NOT NULL,
	[IsApproved] [bit] NULL,
	[ApprovedBy] [nvarchar](50) NULL,
	[ApprovedDate] [datetime] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_SOWResult] PRIMARY KEY CLUSTERED 
(
	[SOWResult_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWStatus]    Script Date: 15/06/2019 16:45:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOWStatus](
	[SOWStatus_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_SOWStatus] PRIMARY KEY CLUSTERED 
(
	[SOWStatus_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWTrack]    Script Date: 15/06/2019 16:45:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOWTrack](
	[SOWTrack_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOW_FK] [int] NULL,
	[Technology_FK] [int] NULL,
	[Route] [nvarchar](max) NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_SOWTrack] PRIMARY KEY CLUSTERED 
(
	[SOWTrack_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWTrackResult]    Script Date: 15/06/2019 16:45:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOWTrackResult](
	[SOWTrackResult_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOWTrack_FK] [int] NULL,
	[CheckIn_FK] [int] NULL,
	[Route] [nvarchar](max) NULL,
	[ApprovedBy] [nvarchar](50) NULL,
	[ApprovedDate] [datetime] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_SOWTrackResult] PRIMARY KEY CLUSTERED 
(
	[SOWTrackResult_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_UserHistori]    Script Date: 15/06/2019 16:45:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_UserHistori](
	[UserHistori_PK] [int] IDENTITY(1,1) NOT NULL,
	[UserDetail_FK] [int] NOT NULL,
	[TglMulai] [datetime] NOT NULL,
	[TglSelesai] [datetime] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblM_UserHistori] PRIMARY KEY CLUSTERED 
(
	[UserHistori_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_UserPayroll]    Script Date: 15/06/2019 16:45:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_UserPayroll](
	[UserPayroll_PK] [int] IDENTITY(1,1) NOT NULL,
	[UserDetail_FK] [int] NOT NULL,
	[Nominal] [numeric](18, 0) NOT NULL,
	[TglMulai] [datetime] NOT NULL,
	[TglSelesai] [datetime] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_UserPayroll] PRIMARY KEY CLUSTERED 
(
	[UserPayroll_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[tblM_BTSTechnology] ADD  CONSTRAINT [DF_tblM_BTSTechnology_CreatedBy]  DEFAULT (N'SYSTEM') FOR [CreatedBy]
GO
ALTER TABLE [dbo].[tblM_BTSTechnology] ADD  CONSTRAINT [DF_tblM_BTSTechnology_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[tblM_BTSTechnology] ADD  CONSTRAINT [DF_tblM_BTSTechnology_Status_FK]  DEFAULT ((1)) FOR [Status_FK]
GO
ALTER TABLE [dbo].[tblM_User] ADD  CONSTRAINT [DF_tblM_User_RoleGroup_FK]  DEFAULT ((0)) FOR [KategoriJabatan_FK]
GO
ALTER TABLE [dbo].[tblT_Cost] ADD  CONSTRAINT [DF_tblT_Cost_Nominal]  DEFAULT ((0)) FOR [Nominal]
GO
ALTER TABLE [dbo].[tblT_SOWAssign] ADD  CONSTRAINT [DF_tblT_SOWAssign_CreatedBy]  DEFAULT (N'SYSTEM') FOR [CreatedBy]
GO
ALTER TABLE [dbo].[tblT_SOWAssign] ADD  CONSTRAINT [DF_tblT_SOWAssign_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[tblT_SOWAssign] ADD  CONSTRAINT [DF_tblT_SOWAssign_UpdatedBy]  DEFAULT (N'SYSTEM') FOR [UpdatedBy]
GO
ALTER TABLE [dbo].[tblT_SOWAssign] ADD  CONSTRAINT [DF_tblT_SOWAssign_UpdatedDate]  DEFAULT (getdate()) FOR [UpdatedDate]
GO
ALTER TABLE [dbo].[tblT_SOWAssign] ADD  CONSTRAINT [DF_tblT_SOWAssign_Status_FK]  DEFAULT ((1)) FOR [Status_FK]
GO
ALTER TABLE [dbo].[tblM_Aset]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Aset_KategoriAset_FK] FOREIGN KEY([KategoriAset_FK])
REFERENCES [dbo].[tblM_AsetKategori] ([AsetKategori_PK])
GO
ALTER TABLE [dbo].[tblM_Aset] CHECK CONSTRAINT [FK_tblM_Aset_KategoriAset_FK]
GO
ALTER TABLE [dbo].[tblM_Aset]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Aset_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_Aset] CHECK CONSTRAINT [FK_tblM_Aset_Status_FK]
GO
ALTER TABLE [dbo].[tblM_AsetKategori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_KategoriAset_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_AsetKategori] CHECK CONSTRAINT [FK_tblM_KategoriAset_Status_FK]
GO
ALTER TABLE [dbo].[tblM_AuthParam]  WITH CHECK ADD  CONSTRAINT [FK_tblM_AuthParam_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_AuthParam] CHECK CONSTRAINT [FK_tblM_AuthParam_Status_FK]
GO
ALTER TABLE [dbo].[tblM_Cabang]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Cabang_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_Cabang] CHECK CONSTRAINT [FK_tblM_Cabang_Status_FK]
GO
ALTER TABLE [dbo].[tblM_Kota]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Kota_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_Kota] CHECK CONSTRAINT [FK_tblM_Kota_Status_FK]
GO
ALTER TABLE [dbo].[tblM_MappingRoleToRoleGroup]  WITH CHECK ADD  CONSTRAINT [FK_tblM_MappingRoleToRoleGroup_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_MappingRoleToRoleGroup] CHECK CONSTRAINT [FK_tblM_MappingRoleToRoleGroup_Status_FK]
GO
ALTER TABLE [dbo].[tblM_MappingUserToAuthParam]  WITH CHECK ADD  CONSTRAINT [FK_tblM_MappingUserToAuthParam_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_MappingUserToAuthParam] CHECK CONSTRAINT [FK_tblM_MappingUserToAuthParam_Status_FK]
GO
ALTER TABLE [dbo].[tblM_MappingUserToRoleGroup]  WITH CHECK ADD  CONSTRAINT [FK_tblM_MappingUserToRoleGroup_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_MappingUserToRoleGroup] CHECK CONSTRAINT [FK_tblM_MappingUserToRoleGroup_Status_FK]
GO
ALTER TABLE [dbo].[tblM_Role]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Role_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_Role] CHECK CONSTRAINT [FK_tblM_Role_Status_FK]
GO
ALTER TABLE [dbo].[tblM_User]  WITH CHECK ADD  CONSTRAINT [FK_tblM_User_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_User] CHECK CONSTRAINT [FK_tblM_User_Status_FK]
GO
ALTER TABLE [dbo].[tblM_User]  WITH CHECK ADD  CONSTRAINT [FK_tblM_User_UserDetail_FK] FOREIGN KEY([UserDetail_FK])
REFERENCES [dbo].[tblM_UserDetail] ([UserDetail_PK])
GO
ALTER TABLE [dbo].[tblM_User] CHECK CONSTRAINT [FK_tblM_User_UserDetail_FK]
GO
ALTER TABLE [dbo].[tblM_UserDetail]  WITH CHECK ADD  CONSTRAINT [FK_tblM_UserDetail_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_UserDetail] CHECK CONSTRAINT [FK_tblM_UserDetail_Status_FK]
GO
ALTER TABLE [dbo].[tblT_AsetHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_AsetHistori_Aset_FK] FOREIGN KEY([Aset_FK])
REFERENCES [dbo].[tblM_Aset] ([Aset_PK])
GO
ALTER TABLE [dbo].[tblT_AsetHistori] CHECK CONSTRAINT [FK_tblM_AsetHistori_Aset_FK]
GO
ALTER TABLE [dbo].[tblT_AsetHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_AsetHistori_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblT_AsetHistori] CHECK CONSTRAINT [FK_tblM_AsetHistori_Status_FK]
GO
ALTER TABLE [dbo].[tblT_AsetHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_AsetHistori_UserDetail_FK] FOREIGN KEY([UserDetail_FK])
REFERENCES [dbo].[tblM_UserDetail] ([UserDetail_PK])
GO
ALTER TABLE [dbo].[tblT_AsetHistori] CHECK CONSTRAINT [FK_tblM_AsetHistori_UserDetail_FK]
GO
ALTER TABLE [dbo].[tblT_UserHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_UserHistori_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblT_UserHistori] CHECK CONSTRAINT [FK_tblM_UserHistori_Status_FK]
GO
ALTER TABLE [dbo].[tblT_UserHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_UserHistori_UserDetail_FK] FOREIGN KEY([UserDetail_FK])
REFERENCES [dbo].[tblM_UserDetail] ([UserDetail_PK])
GO
ALTER TABLE [dbo].[tblT_UserHistori] CHECK CONSTRAINT [FK_tblM_UserHistori_UserDetail_FK]
GO
/****** Object:  StoredProcedure [dbo].[GetTaskList]    Script Date: 15/06/2019 16:45:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetTaskList] 
@userID int,
@statusSOW int = 0
AS
BEGIN
SET FMTONLY OFF
	declare @query varchar(8000) = '
Select  
  * 
from 
  (
    SELECT 
      SA.User_FK, 
	  SA.SOW_FK,
      SA.SOWAssign_PK, 
      (
        ISNULL(
          (
            select 
              max(checkin_pk) 
            from 
              tblT_CheckIn 
            where 
              SOWAssign_FK = SA.SOWAssign_PK
          ), 
          0
        )
      ) AS CheckIn_PK, 
      S.BTS_FK, 
	  S.SOWName,
	  b.TowerID,
      B.[Name] AS BTS, 
      B.Alamat, 
      SS.SOWStatus_PK as StatusID, 
      (
        SELECT 
          CASE WHEN EXISTS (
            SELECT 
              CheckIn_PK 
            FROM 
              tblT_CheckIn 
            WHERE 
              SOWAssign_FK = SA.SOWAssign_PK
          ) THEN (
			  CASE WHEN EXISTS(
					select 
					  FileUrl 
					from 
					  tblT_SOWResult x 
					  inner join tblt_checkin y on x.CheckIn_FK = y.CheckIn_PK 
					where 
					  y.SOWAssign_FK = SA.SOWAssign_PK
				  ) 
			  THEN 
					CASE ISNULL(
					  (
						select 
						  FileUrl 
						from 
						  tblT_SOWResult x 
						  inner join tblt_checkin y on x.CheckIn_FK = y.CheckIn_PK 
						where 
						  y.SOWAssign_FK = SA.SOWAssign_PK
					  ),  '''' 
					  ) WHEN '''' THEN 4 ELSE 3 END
			 else 2 end
          ) ELSE 1 END
      ) Status, 
      CASE WHEN EXISTS (
        SELECT 
          * 
        FROM 
          tblT_SOWIssue 
        WHERE 
          SOWAssign_FK = SA.SOWAssign_PK
      ) THEN CONVERT(bit, 1) ELSE CONVERT(bit, 0) END AS Reported, 
      (
        SELECT 
          TOP 1 Description 
        FROM 
          tblT_SOWIssue 
        WHERE 
          SOWAssign_FK = SA.SOWAssign_PK 
        ORDER BY 
          SOWIssue_PK DESC
      ) AS ReportedValue, 
      CASE ISNULL(
        (
          select 
            IsApproved 
          from 
            tblT_SOWResult x 
            inner join tblt_checkin y on x.CheckIn_FK = y.CheckIn_PK 
          where 
            y.SOWAssign_FK = SA.SOWAssign_PK
        ), 
        0
      ) WHEN 0 THEN CONVERT(BIT, 0) ELSE CONVERT(BIT, 1) END IsClose, 
      CASE ISNULL(
        (
          select 
            FileUrl 
          from 
            tblT_SOWResult x 
            inner join tblt_checkin y on x.CheckIn_FK = y.CheckIn_PK 
          where 
            y.SOWAssign_FK = SA.SOWAssign_PK
        ), 
        ''''
      ) WHEN '''' THEN CONVERT(BIT, 0) ELSE CONVERT(BIT, 1) END IsSubmitted 
    FROM 
      tblT_SOWAssign SA 
      JOIN tblT_SOW S ON S.SOW_PK = SA.SOW_FK 
      JOIN tblM_BTS B ON B.BTS_PK = S.BTS_FK  
      LEFT JOIN tblT_SOWStatus SS ON SS.SOWStatus_PK = S.StatusSOW_FK 
  ) AS TaskList 
		WHERE User_FK = ' + convert(varchar,@userID) 
	IF(@statusSOW != 0)  
	set @query = @query +  'AND Status = ' + convert(varchar,@statusSOW)
	CREATE TABLE #Result
	(
		User_FK int, SOW_FK int, SOWAssign_PK int, CheckIn_PK int, BTS_FK int, SOWName varchar(1000), TowerID varchar(1000), BTS VARCHAR(500), Alamat VARCHAR(500), StatusID int, Status int, Reported bit, ReportedValue Varchar(4000), IsClose bit, IsSubmitted bit
	)
	INSERT #Result EXEC (@query) 
	SELECT * FROM #Result 
	DROP TABLE #Result  
	 
END
GO
/****** Object:  StoredProcedure [dbo].[GetTimesheetDaily]    Script Date: 15/06/2019 16:45:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetTimesheetDaily]
@userID int,
@month int,
@year int,
@day int
AS
BEGIN
	SELECT 
  B.[Name], 
  [dbo].[getTechnology](S.SOW_PK) as Technology, 
  FORMAT(CI.WaktuCheckIn, 'hh:mm tt')+ ' - ' + FORMAT(CI.WaktuCheckOut, 'hh:mm tt') as [Time], 
  case when (day((select top 1 WaktuCheckOut from tblT_CheckIn where CheckIn_PK = CI.CheckIn_PK))-day((select top 1 WaktuCheckIn from tblT_CheckIn where CheckIn_PK = CI.CheckIn_PK))) >  0 then CONVERT(bit,1)
		else CONVERT(bit,0)
		end	
		AS IsDiffDay,
  DATEDIFF(
    MINUTE, CI.WaktuCheckIn, CI.WaktuCheckOut
  ) / 60 as Duration 
FROM 
  tblT_CheckIn CI 
  JOIN tblT_SOWAssign SA ON SA.SOWAssign_PK = CI.SOWAssign_FK 
  JOIN tblT_SOW S ON S.SOW_PK = SA.SOW_FK 
  JOIN tblM_BTS B ON B.BTS_PK = S.BTS_FK 
WHERE 
  SA.User_FK = @userID 
  AND MONTH(CI.WaktuCheckIn)= @month 
  AND YEAR(CI.WaktuCheckIn) = @year 
  AND CI.WaktuCheckOut is not null 
  AND DAY(CI.WaktuCheckIn)= @day


END

GO
/****** Object:  StoredProcedure [dbo].[GetTimesheetMonthly]    Script Date: 15/06/2019 16:45:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetTimesheetMonthly]
@userID int,
@month int,
@year int
AS
BEGIN
	SELECT WaktuCheckIn FROM tblT_CheckIn CI JOIN tblT_SOWAssign SA ON SA.SOWAssign_PK=CI.SOWAssign_FK
	WHERE SA.User_FK = @userID AND MONTH(CI.WaktuCheckIn)= @month AND YEAR(CI.WaktuCheckIn) = @year AND CI.WaktuCheckOut is not null
END

GO
/****** Object:  StoredProcedure [dbo].[GetTimesheetMonthlyV2]    Script Date: 15/06/2019 16:45:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[GetTimesheetMonthlyV2] 
@userId int,
@month int,
@year int
as
begin
	select 
		*,  
		(select count(checkin_pk)  from tblT_CheckIn where SOWAssign_FK = TimeSheetMonthly.SOWAssign_FK and CONVERT(date, WaktuCheckIn) = Date) AS TotalTask
	 from(
	select 
		ROW_NUMBER() OVER(PARTITION BY  convert(date, checkin.waktucheckin) ORDER BY convert(date, checkin.waktucheckin) ASC) AS Row, 
		checkin.SOWAssign_FK,
		CONVERT(date, WaktuCheckIn) Date,
		(select top 1 WaktuCheckIn from tblT_CheckIn where CheckIn_PK = CheckIn.CheckIn_PK) As FirstCheckIn,
		(select Name From tblM_BTS Where BTS_PK = SOW.BTS_FK ) As FirstLocation,
		(select top 1 WaktuCheckOut from tblT_CheckIn x where   (month(x.WaktuCheckOut) = @month AND YEAR(x.WaktuCheckOut ) = @year)  ORDER BY CheckIn_PK DESC) As LastCheckOut,
		(select BTS.Name from tblM_BTS bts where 
			BTS_PK = ( 
				select bts_fk 
				from 
					tblt_sow y inner join tblT_SOWAssign z on y.SOW_PK= z.SOW_FK 
				where 
					z.User_FK = @userId
					AND
					z.SOWAssign_PK = 
						(
							select top 1 SOWAssign_FK 
							from tblT_CheckIn x 
							where   
							(month(x.WaktuCheckOut) = @month AND YEAR(x.WaktuCheckOut ) = @year) ORDER BY X.CheckIn_PK DESC
						))) As LastLocation,
		case when (day((select top 1 WaktuCheckOut from tblT_CheckIn where CheckIn_PK = CheckIn.CheckIn_PK))-day((select top 1 WaktuCheckIn from tblT_CheckIn where CheckIn_PK = CheckIn.CheckIn_PK))) >  0 then CONVERT(bit,1)
		else CONVERT(bit,0)
		end	
		AS IsDiffDay
	from 
		tblT_CheckIn CheckIn 
		INNER JOIN tblT_SOWAssign SOWAssign ON CheckIn.SOWAssign_FK = SOWAssign.SOWAssign_PK
		INNER JOIN tblT_SOW SOW ON SOWAssign.SOW_FK = SOW.SOW_PK 
	where
		SOWAssign.User_FK = @userId
		AND MONTH(CheckIn.WaktuCheckIn) = @month
		AND year(CheckIn.WaktuCheckIn) = @year
		) AS TimeSheetMonthly
	where Row = 1 
end
GO
/****** Object:  StoredProcedure [dbo].[usp_GetActivities]    Script Date: 15/06/2019 16:45:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[usp_GetActivities] @User_FK int
as
--check in
select 
	SOWDetail.User_FK,
	WaktuCheckIn AS Tanggal,
	CONVERT(VARCHAR, WaktuCheckIn, 108) AS CheckInTime,
	CONVERT(VARCHAR, WaktuCheckOut, 108) AS CheckOutTime,
	cast('SOW: ' + SOWDetail.SOWName + CHAR(10)  + CHAR(13) + 'Description: ' + SOWResult.FileUrl  as NVARCHAR(max) ) AS Aktifitas,
	'N/A' AS ApprovedBy
from 
	tblT_CheckIn CheckIn
	INNER JOIN
	(SELECT
		Assign.User_FK,
		SOW.SOWName,
		Assign.SOWAssign_PK
	FROM tblT_SOW SOW 
		 INNER JOIN tblM_Project Project ON SOW.Project_FK = Project.Project_PK
		 INNER JOIN tblT_SOWAssign Assign ON SOW.SOW_PK = Assign.SOW_FK 
	 ) SOWDetail ON CheckIn.SOWAssign_FK  = SOWDetail.SOWAssign_PK
	  LEFT JOIN tblT_SOWResult SOWResult ON SOWResult.CheckIn_FK = CheckIn.CheckIn_PK
WHERE 
	CheckIn.WaktuCheckOut IS NULL	 
	AND SOWDetail.User_FK  = @User_FK

UNION ALL
	
--Check out	
select 
	SOWDetail.User_FK,
	WaktuCheckOut AS Tanggal,
	CONVERT(VARCHAR, WaktuCheckIn, 108) AS CheckInTime,
	CONVERT(VARCHAR, WaktuCheckOut, 108) AS CheckOutTime,
	cast('SOW: ' + SOWDetail.SOWName+ CHAR(10)  + CHAR(13) + 'Description: ' + SOWResult.FileUrl  as NVARCHAR(max) ) AS Aktifitas,
	'N/A' AS ApprovedBy
from 
	tblT_CheckIn CheckIn
	INNER JOIN
	(SELECT
		Assign.User_FK,
		SOW.SOWName,
		Assign.SOWAssign_PK
	FROM tblT_SOW SOW 
		 INNER JOIN tblM_Project Project ON SOW.Project_FK = Project.Project_PK
		 INNER JOIN tblT_SOWAssign Assign ON SOW.SOW_PK = Assign.SOW_FK 
	 ) SOWDetail ON CheckIn.SOWAssign_FK  = SOWDetail.SOWAssign_PK 
	 LEFT JOIN tblT_SOWResult SOWResult ON SOWResult.CheckIn_FK = CheckIn.CheckIn_PK
WHERE 
	CheckIn.WaktuCheckOut IS NOT NULL	 
	AND SOWDetail.User_FK  = @User_FK	
	
UNION ALL

-- CUTI	 
SELECT
	IzinCuti.User_FK,
	TglMulai AS Tanggal,
	'N/A' AS CheckInTime,
	'N/A' AS CheckOutTime,
	CONVERT(VARCHAR, IzinCuti.Alasan) AS Aktifitas,
	UserDetail.Name AS ApprovedBy
FROM 
	tblT_IzinCuti IzinCuti
	INNER JOIN tblM_UserDetail UserDetail ON IzinCuti.ApprovalUserDetail_FK = UserDetail.UserDetail_PK
WHERE
	IzinCuti.IzinCutiStatus_FK = 1
	AND IzinCuti.User_FK = @User_FK
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDailyTask]    Script Date: 15/06/2019 16:45:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_GetDailyTask] 
@keyword varchar(1000) = ''
AS 
declare @currentDate datetime = getdate()
select 
	*,
	CASE 
		WHEN EXISTs (select * from tblT_CheckIn X inner join tblT_SOWAssign y on x.SOWAssign_FK = y.SOWAssign_PK where y.User_FK = dailytask.User_FK and convert(date, x.WaktuCheckIn) = convert(date, @currentDate) ) 
			THEN 'Online' --1
		WHEN EXISTS ( select * from tblT_IzinCuti x where User_FK = dailytask.User_FK and( x.TglMulai IS NOT NULL AND x.TglSelesai IS NULL))
			THEN 'Cuti' --2
		WHEN not exists(select * from tblT_SOWAssign x where x.User_FK = dailyTask.user_FK) 
			THEN 'Unassigned'  --3
		Else
			'Offline' --4
	END
		AS Status
 from ( 
		SELECT	 
			tUser.User_PK AS User_FK,
			UserDetail.UserCode AS UserId,
			UserDetail.Name AS UserName,  
			Jabatan.Title AS KategoriJabatanTitle
			--row_number() over(partition by tUser.user_pk order by Assign.SOWAssign_PK, cuti.IzinCuti_PK, CheckIn.CheckIn_PK  desc) RowNumber
	
		FROM 
			tblM_User tUser
			INNER JOIN tblM_UserDetail UserDetail ON tUser.UserDetail_FK = UserDetail.UserDetail_PK
			LEFT JOIN tblM_KategoriJabatan Jabatan ON tUser.KategoriJabatan_FK = Jabatan.KategoriJabatan_PK 
		WHERE
			tUser.Status_FK != 3
		) 
AS dailytask
	 where (
	UserName LIKE '%' + @keyword + '%'
	OR UserId LIKE '%' + @keyword + '%') 
	 
GO
/****** Object:  StoredProcedure [dbo].[usp_GetNetworkTask]    Script Date: 15/06/2019 16:45:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_GetNetworkTask] @userFk int, @sowFk int
AS
select 
   (ISNULL((select  max(checkin_pk) from tblT_CheckIn where SOWAssign_FK = SOWAssign.SOWAssign_PK),0)) AS CheckIn_PK, 
	Technology.Title AS Type,
	CASE when EXISTS(select CheckIn_FK from tblT_SOWTrackResult SOWTrackResult where SOWTrackResult.SOWTrack_FK = SOWTrack.SOWTrack_PK) 
	THEN 
		CASE ISNULL((select top 1 Route from tblT_SOWTrackResult SOWTrackResult where SOWTrackResult.SOWTrack_FK = SOWTrack.SOWTrack_PK order by SOWTrackResult.SOWTrackResult_PK desc), '') 
		WHEN ''
			THEN 2
		ELSE
			 3
		END
	ELSE
		1
	END AS Status
from 
	tblT_SOWTrack SOWTrack
	INNER JOIN tblT_SOW SOW ON SOWTrack.SOW_FK = SOW.SOW_PK
	INNER JOIN tblM_Technology Technology ON SOWTrack.Technology_FK = Technology.Technology_PK   
	LEFT JOIN tblT_SOWAssign SOWAssign ON SOW.SOW_PK = SOWAssign.SOW_FK   
WHERE 
	SOWAssign.User_FK = @userFk    
    AND SOW.SOW_PK = @sowFk


	--select * from tblT_SOWResult where CheckIn_FK = 84
GO
/****** Object:  StoredProcedure [dbo].[usp_GetSowAssign]    Script Date: 15/06/2019 16:45:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_GetSowAssign] 
@SOW_FK INT
AS
	select 
		ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
		ISNULL(Assign.SOW_FK, 0) SOW_FK,
		ISNULL(SOW.SOWName, '') SOWName,
		ISNULL(Assign.User_FK, 0) User_FK,
		ISNULL(UserDetail.Name, '')AS UserName,
		Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
		Jabatan.Title AS KategoriJabatanTitle,
		Assign.TglMulai,
		Assign.TglSelesai,
		Assign.CreatedBy,
		ISNULL(Assign.CreatedDate, GETDATE()) CreatedDate,
		Assign.UpdatedBy,
		ISNULL(Assign.UpdatedDate, GETDATE()) UpdatedDate,
		ISNULL(Assign.Status_FK , 1) Status_FK
	from 
		tblM_KategoriJabatan Jabatan
		left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 1 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
		left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
		left join tblM_User Users ON Assign.User_FK = Users.User_PK
		left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
	where 	
		Jabatan.KategoriJabatan_PK = 1
	union all
	select 
		ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
		ISNULL(Assign.SOW_FK, 0) SOW_FK,
		ISNULL(SOW.SOWName, '') SOWName,
		ISNULL(Assign.User_FK, 0) User_FK,
		ISNULL(UserDetail.Name, '')AS UserName,
		Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
		Jabatan.Title AS KategoriJabatanTitle,
		Assign.TglMulai,
		Assign.TglSelesai,
		Assign.CreatedBy,
		ISNULL(Assign.CreatedDate, GETDATE()) CreatedDate,
		Assign.UpdatedBy,
		ISNULL(Assign.UpdatedDate, GETDATE()) UpdatedDate,
		ISNULL(Assign.Status_FK , 1) Status_FK
	from 
		tblM_KategoriJabatan Jabatan
		left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 2 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
		left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
		left join tblM_User Users ON Assign.User_FK = Users.User_PK
		left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
	where 	
		Jabatan.KategoriJabatan_PK = 2	

	union all
	select 
		ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
		ISNULL(Assign.SOW_FK, 0) SOW_FK,
		ISNULL(SOW.SOWName, '') SOWName,
		ISNULL(Assign.User_FK, 0) User_FK,
		ISNULL(UserDetail.Name, '')AS UserName,
		Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
		Jabatan.Title AS KategoriJabatanTitle,
		Assign.TglMulai,
		Assign.TglSelesai,
		Assign.CreatedBy,
		ISNULL(Assign.CreatedDate, GETDATE()) CreatedDate,
		Assign.UpdatedBy,
		ISNULL(Assign.UpdatedDate, GETDATE()) UpdatedDate,
		ISNULL(Assign.Status_FK , 1) Status_FK
	from 
		tblM_KategoriJabatan Jabatan
		left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 3 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
		left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
		left join tblM_User Users ON Assign.User_FK = Users.User_PK
		left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
	where 	
		Jabatan.KategoriJabatan_PK = 3
	union all
	select 
		ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
		ISNULL(Assign.SOW_FK, 0) SOW_FK,
		ISNULL(SOW.SOWName, '') SOWName,
		ISNULL(Assign.User_FK, 0) User_FK,
		ISNULL(UserDetail.Name, '')AS UserName,
		Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
		Jabatan.Title AS KategoriJabatanTitle,
		Assign.TglMulai,
		Assign.TglSelesai,
		Assign.CreatedBy,
		ISNULL(Assign.CreatedDate, GETDATE()) CreatedDate,
		Assign.UpdatedBy,
		ISNULL(Assign.UpdatedDate, GETDATE()) UpdatedDate,
		ISNULL(Assign.Status_FK , 1) Status_FK
	from 
		tblM_KategoriJabatan Jabatan
		left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 5 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
		left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
		left join tblM_User Users ON Assign.User_FK = Users.User_PK
		left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
	where 	
		Jabatan.KategoriJabatan_PK = 5		
	union all
	select 
		ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
		ISNULL(Assign.SOW_FK, 0) SOW_FK,
		ISNULL(SOW.SOWName, '') SOWName,
		ISNULL(Assign.User_FK, 0) User_FK,
		ISNULL(UserDetail.Name, '')AS UserName,
		Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
		Jabatan.Title AS KategoriJabatanTitle,
		Assign.TglMulai,
		Assign.TglSelesai,
		Assign.CreatedBy,
		ISNULL(Assign.CreatedDate, GETDATE()) CreatedDate,
		Assign.UpdatedBy,
		ISNULL(Assign.UpdatedDate, GETDATE()) UpdatedDate,
		ISNULL(Assign.Status_FK , 1) Status_FK
	from 
		tblM_KategoriJabatan Jabatan
		left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 6 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
		left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
		left join tblM_User Users ON Assign.User_FK = Users.User_PK
		left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
	where 	
		Jabatan.KategoriJabatan_PK = 6
GO
