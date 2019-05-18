USE [GlobalSolusindo]
GO
/****** Object:  UserDefinedFunction [dbo].[getTechnology]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[Table_1]    Script Date: 29/04/2019 19:23:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Table_1](
	[json] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Area]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_Aset]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_AsetKategori]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_AuthParam]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_BTS]    Script Date: 29/04/2019 19:23:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_BTS](
	[BTS_PK] [int] IDENTITY(1,1) NOT NULL,
	[CustomerSite] [nvarchar](100) NOT NULL,
	[TowerID] [nvarchar](100) NOT NULL,
	[CellID] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Operator_FK] [int] NOT NULL,
	[StatusBTS_FK] [int] NULL,
	[Longitude] [nvarchar](100) NULL,
	[Latitude] [nvarchar](100) NULL,
	[Area_FK] [int] NOT NULL,
	[Kota_FK] [int] NOT NULL,
	[Cabang_FK] [int] NOT NULL,
	[Alamat] [nvarchar](500) NOT NULL,
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
/****** Object:  Table [dbo].[tblM_BTSStatus]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_Cabang]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_CostKategori]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_DeliveryArea]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_IssueType]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_IzinCutiStatus]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_KategoriJabatan]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_Kota]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_MappingRoleToRoleGroup]    Script Date: 29/04/2019 19:23:22 ******/
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
/****** Object:  Table [dbo].[tblM_MappingUserToAuthParam]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblM_MappingUserToRoleGroup]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblM_Operator]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblM_PMHistori]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblM_Project]    Script Date: 29/04/2019 19:23:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Project](
	[Project_PK] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Operator_FK] [int] NULL,
	[DeliveryArea_FK] [int] NULL,
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
/****** Object:  Table [dbo].[tblM_Role]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblM_RoleGroup]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblM_Status]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblM_Technology]    Script Date: 29/04/2019 19:23:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Technology](
	[Technology_PK] [int] NOT NULL,
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
/****** Object:  Table [dbo].[tblM_User]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblM_UserDetail]    Script Date: 29/04/2019 19:23:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_UserDetail](
	[UserDetail_PK] [int] IDENTITY(1,1) NOT NULL,
	[UserCode] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[TglLahir] [date] NOT NULL,
	[FilePhoto] [varbinary](max) NULL,
	[NoKTP] [nvarchar](20) NOT NULL,
	[NoHP] [nvarchar](20) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Address] [nvarchar](500) NOT NULL,
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
/****** Object:  Table [dbo].[tblT_AsetHistori]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblT_CheckIn]    Script Date: 29/04/2019 19:23:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_CheckIn](
	[CheckIn_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOWAssign_FK] [int] NOT NULL,
	[File] [varbinary](50) NULL,
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
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_Cost]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblT_IzinCuti]    Script Date: 29/04/2019 19:23:23 ******/
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
	[FilePendukung] [varbinary](50) NULL,
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
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOW]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblT_SOWAssign]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblT_SOWIssue]    Script Date: 29/04/2019 19:23:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOWIssue](
	[SOWIssue_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOWAssign_FK] [int] NULL,
	[IssueType_FK] [int] NULL,
	[Description] [nvarchar](500) NULL,
	[Foto] [varbinary](50) NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_SOWIssue] PRIMARY KEY CLUSTERED 
(
	[SOWIssue_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWResult]    Script Date: 29/04/2019 19:23:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOWResult](
	[SOWResult_PK] [int] IDENTITY(1,1) NOT NULL,
	[CheckIn_FK] [int] NULL,
	[ApprovedBy] [nvarchar](50) NULL,
	[ApprovedDate] [datetime] NULL,
	[CreatedBy] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](50) NULL,
	[UpdatedDate] [datetime] NULL,
	[Status_FK] [int] NULL,
 CONSTRAINT [PK_tblT_SOWResult] PRIMARY KEY CLUSTERED 
(
	[SOWResult_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWResultDetail]    Script Date: 29/04/2019 19:23:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_SOWResultDetail](
	[SOWResultDetail_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOWResult_FK] [int] NULL,
	[FileUrl] [nvarchar](max) NULL,
	[CreatedBy] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](50) NULL,
	[UpdatedDate] [datetime] NULL,
	[Status_FK] [int] NULL,
 CONSTRAINT [PK_tblT_SOWResultDetail] PRIMARY KEY CLUSTERED 
(
	[SOWResultDetail_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWStatus]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblT_SOWTrack]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblT_SOWTrackResult]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblT_UserHistori]    Script Date: 29/04/2019 19:23:23 ******/
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
/****** Object:  Table [dbo].[tblT_UserPayroll]    Script Date: 29/04/2019 19:23:23 ******/
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
ALTER TABLE [dbo].[tblM_User] ADD  CONSTRAINT [DF_tblM_User_RoleGroup_FK]  DEFAULT ((0)) FOR [KategoriJabatan_FK]
GO
ALTER TABLE [dbo].[tblT_Cost] ADD  CONSTRAINT [DF_tblT_Cost_Nominal]  DEFAULT ((0)) FOR [Nominal]
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
/****** Object:  StoredProcedure [dbo].[GetRoute]    Script Date: 29/04/2019 19:23:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetRoute]
@taskID int,
@tech int
AS
BEGIN
SELECT [Route] FROM tblT_SOWTrack ST
JOIN tblT_SOW S ON S.SOW_PK=ST.SOW_FK
JOIN tblT_SOWAssign SA ON SA.SOW_FK=S.SOW_PK
WHERE SA.SOWAssign_PK=@taskID AND ST.Technology_FK=@tech
END
GO
/****** Object:  StoredProcedure [dbo].[GetTaskList]    Script Date: 29/04/2019 19:23:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetTaskList]
@userID int,
@statusSOW int
AS
BEGIN
	SELECT SA.SOWAssign_PK, B.[Name] as BTS, B.Alamat,SS.SOWStatus_PK as StatusID, SS.SOWStatus_PK as [Status] ,
	case 
	when exists (
      SELECT * FROM tblT_SOWIssue WHERE SOW_FK =S.SOW_PK
	   ) 
	   then CONVERT(bit, 1) 
	   else CONVERT(bit, 0) END as Reported
	from tblT_SOWAssign SA 
	JOIN tblT_SOW S ON S.SOW_PK=SA.SOW_FK 
	JOIN tblM_BTS B ON B.BTS_PK=S.BTS_FK
	LEFT JOIN tblT_SOWIssue SI ON SI.SOWAssign_FK=SA.SOWAssign_PK
	LEFT JOIN tblT_SOWStatus SS ON SS.SOWStatus_PK=S.StatusSOW_FK
	WHERE SA.User_FK = @userID AND S.Status_FK=@statusSOW
END

GO
/****** Object:  StoredProcedure [dbo].[GetTimesheetDaily]    Script Date: 29/04/2019 19:23:24 ******/
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
	SELECT B.[Name],[dbo].[getTechnology](S.SOW_PK) as Technology, CONVERT(VARCHAR,CI.WaktuCheckIn,108)+' - '+ CONVERT(VARCHAR, CI.WaktuCheckOut, 108) as [Time]
,DATEDIFF(MINUTE, CI.WaktuCheckIn, CI.WaktuCheckOut) / 60 as Duration  FROM tblT_CheckIn CI JOIN tblT_SOWAssign SA ON SA.SOWAssign_PK=CI.SOWAssign_FK
JOIN tblT_SOW S ON S.SOW_PK=SA.SOW_FK
JOIN tblM_BTS B ON B.BTS_PK=S.BTS_FK
	WHERE SA.User_FK = @userID AND MONTH(CI.WaktuCheckIn)= @month AND YEAR(CI.WaktuCheckIn) = @year AND CI.WaktuCheckOut is not null
	AND DAY(CI.WaktuCheckIn)=@day

END


GO
/****** Object:  StoredProcedure [dbo].[GetTimesheetMonthly]    Script Date: 29/04/2019 19:23:24 ******/
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
