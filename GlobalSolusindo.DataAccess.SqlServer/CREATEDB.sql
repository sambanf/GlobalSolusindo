USE [GlobalSolusindo]
GO
/****** Object:  Table [dbo].[tblT_SOWTrack]    Script Date: 03/24/2019 23:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tblT_SOWTrack](
	[SOWTrack_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOW_FK] [int] NULL,
	[Technology_FK] [int] NULL,
	[File] [varbinary](50) NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_SOWTrack] PRIMARY KEY CLUSTERED 
(
	[SOWTrack_PK] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tblT_SOWStatus]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblT_SOWAssign]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblT_SOWAssign] ON
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, 6, 22, 1, CAST(0x0000AA1A011CE708 AS DateTime), CAST(0x0000AA1A011CE708 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), 1)
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, 6, 21, 5, CAST(0x0000AA1A011CE708 AS DateTime), CAST(0x0000AA1A011CE708 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), 1)
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, 6, 16, 6, CAST(0x0000AA1A011CE708 AS DateTime), CAST(0x0000AA1A011CE708 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), 1)
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, 6, 15, 3, CAST(0x0000AA1A011CE708 AS DateTime), CAST(0x0000AA1A011CE708 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), 1)
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, 6, 11, 2, CAST(0x0000AA1A011CE708 AS DateTime), CAST(0x0000AA1A011CE708 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), 1)
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (16, 7, 24, 1, CAST(0x0000AA1A011F4A43 AS DateTime), CAST(0x0000AA1A011F4A43 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), 1)
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (17, 7, 21, 5, CAST(0x0000AA1A011F4A43 AS DateTime), CAST(0x0000AA1A011F4A43 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), 1)
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (18, 7, 18, 6, CAST(0x0000AA1A011F4A43 AS DateTime), CAST(0x0000AA1A011F4A43 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), 1)
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (19, 7, 20, 3, CAST(0x0000AA1A011F4A43 AS DateTime), CAST(0x0000AA1A011F4A43 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), 1)
INSERT [dbo].[tblT_SOWAssign] ([SOWAssign_PK], [SOW_FK], [User_FK], [KategoriJabatan_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (20, 7, 13, 2, CAST(0x0000AA1A011F4A43 AS DateTime), CAST(0x0000AA1A011F4A43 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblT_SOWAssign] OFF
/****** Object:  Table [dbo].[tblT_SOW]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblT_SOW] ON
INSERT [dbo].[tblT_SOW] ([SOW_PK], [SOWName], [BTS_FK], [Project_FK], [TglMulai], [TglSelesai], [StatusSOW_FK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'SOW123', 3, 1, CAST(0x0000AA1A00A98BC8 AS DateTime), CAST(0x0000AA1A011CE708 AS DateTime), NULL, N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), N'admin', CAST(0x0000AA1A00AB8B88 AS DateTime), 1)
INSERT [dbo].[tblT_SOW] ([SOW_PK], [SOWName], [BTS_FK], [Project_FK], [TglMulai], [TglSelesai], [StatusSOW_FK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, N'SOW001-123', 2, 1, CAST(0x0000AA19011826C0 AS DateTime), CAST(0x0000AA1A011F4A43 AS DateTime), NULL, N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), N'admin', CAST(0x0000AA1A00AC1613 AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblT_SOW] OFF
/****** Object:  Table [dbo].[tblT_IzinCuti]    Script Date: 03/24/2019 23:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tblT_Cost]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblT_Cost] ON
INSERT [dbo].[tblT_Cost] ([Cost_PK], [KategoriCost_FK], [SOW_FK], [Nominal], [Deskripsi], [Tanggal], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, 4, 7, 100000, N'Makan 1 hari', CAST(0x0000AA1A001342A2 AS DateTime), N'admin', CAST(0x0000AA1A00FA0E22 AS DateTime), N'admin', CAST(0x0000AA1A010A4E55 AS DateTime), 1)
INSERT [dbo].[tblT_Cost] ([Cost_PK], [KategoriCost_FK], [SOW_FK], [Nominal], [Deskripsi], [Tanggal], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, 2, 7, 500000, N'Di rental pak rudi', CAST(0x0000AA1A00FACCB2 AS DateTime), N'admin', CAST(0x0000AA1A00FAE43C AS DateTime), N'admin', CAST(0x0000AA1A00FAE43C AS DateTime), 3)
INSERT [dbo].[tblT_Cost] ([Cost_PK], [KategoriCost_FK], [SOW_FK], [Nominal], [Deskripsi], [Tanggal], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, 3, 7, 10000, N'Tambal ban', CAST(0x0000AA1A010A347C AS DateTime), N'admin', CAST(0x0000AA1A010A419F AS DateTime), N'admin', CAST(0x0000AA1A010A419F AS DateTime), 1)
INSERT [dbo].[tblT_Cost] ([Cost_PK], [KategoriCost_FK], [SOW_FK], [Nominal], [Deskripsi], [Tanggal], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, 1, 6, 500000, N'Ke bali', CAST(0x0000AA1A010A62A4 AS DateTime), N'admin', CAST(0x0000AA1A010A7000 AS DateTime), N'admin', CAST(0x0000AA1A010A7000 AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblT_Cost] OFF
/****** Object:  Table [dbo].[tblT_CheckIn]    Script Date: 03/24/2019 23:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[tblT_CheckIn](
	[CheckIn_PK] [int] IDENTITY(1,1) NOT NULL,
	[SOWAssign_FK] [int] NOT NULL,
	[File] [varbinary](50) NOT NULL,
	[WaktuCheckIn] [datetime] NOT NULL,
	[LongitudeCheckIn] [nvarchar](100) NOT NULL,
	[LatitudeCheckIn] [nvarchar](100) NOT NULL,
	[CellIDCheckIn] [nvarchar](100) NOT NULL,
	[WaktuCheckOut] [datetime] NULL,
	[LongitudeCheckOut] [nvarchar](100) NOT NULL,
	[LatitudeCheckOut] [nvarchar](100) NOT NULL,
	[CellIDCheckOut] [nvarchar](100) NOT NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[Status_FK] [int] NOT NULL,
 CONSTRAINT [PK_tblT_CheckInRigger] PRIMARY KEY CLUSTERED 
(
	[CheckIn_PK] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tblM_Area]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_Area] ON
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'BANJARHARJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'AJIBARANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'LARANGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'KETANGGUNGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'BANTARSARI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'MARGASARI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, N'KAWUNGANTEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, N'TANGEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, N'KARANGKOBAR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, N'PEMALANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, N'SARANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, N'KEDUNGBANTENG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, N'TARUB', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, N'PANGKAH', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, N'JATISRONO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (16, N'KARANGMOJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (17, N'SEMANU', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (18, N'WANGON', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (19, N'MADUKARA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (20, N'KALIBENING BANJARNEGARA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (21, N'TUNJUNGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (22, N'KARANGSAMBUNG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (23, N'PAGUYANGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (24, N'GONDANGREJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (25, N'SIRAMPOG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (26, N'GABUS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (27, N'PENGADEGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (28, N'JATIBARANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (29, N'BANTARKAWUNG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (30, N'AMPELGADING', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (31, N'PULOSARI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (32, N'TAMAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (33, N'BELIK', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (34, N'BREBES', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (35, N'PUCUNG WETAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (36, N'SURADADI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (37, N'LEBAKSIU', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (38, N'BUMIJAWA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (39, N'PULOKULON', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (40, N'KEJOBONG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (41, N'BALAPULANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (42, N'KALIBAWANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (43, N'PALIYAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (44, N'NGAWEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (45, N'SAMBONG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (46, N'BOGOREJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (47, N'JEPON', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (48, N'JATIROTO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (49, N'TONJONG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (50, N'WIROSARI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (51, N'JATILAWANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (52, N'KALIORI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (53, N'SONGGOM', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (54, N'KEDUNGWUNI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (55, N'PADURESO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (56, N'BAWANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (57, N'SEDAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (58, N'REMBANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (59, N'LASEM', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (60, N'TANGGUNGHARJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (61, N'WARUNGPIRING', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (62, N'KLIRONG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (63, N'GUMELAR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (64, N'KOKAP', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (65, N'0', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (66, N'MLONGGO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (67, N'NGEMPLAK', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (68, N'TIRTOMOYO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (69, N'WONOPRINGGO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (70, N'BOJONG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (71, N'PASARKLIWON', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (72, N'LAWEYAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (73, N'KARTASURA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (74, N'GROGOL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (75, N'SUKOHARJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (76, N'TEGAL TIMUR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (77, N'BANJARREJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (78, N'ALIAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (79, N'PAMOTAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (80, N'KARANG PUCUNG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (81, N'SLUKE', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (82, N'SALE', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (83, N'GUNEM', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (84, N'EROMOKO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (85, N'WURYANTO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (86, N'GIRITONTRO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (87, N'KRAGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (88, N'BATUR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (89, N'PRACIMANTORO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (90, N'NGARINGIN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (91, N'SULANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (92, N'KISMANTORO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (93, N'GIRIWOYO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (94, N'SUMBER', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (95, N'KANDEMAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (96, N'PEKALONGAN SELATAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (97, N'BULU', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (98, N'SLOGOHIMO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (99, N'RANDUBLATUNG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (100, N'BATU WARNO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
GO
print 'Processed 100 total records'
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (101, N'CAWAS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (102, N'COLOMADU', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (103, N'BAKI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (104, N'KARANGANYAR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (105, N'MOJOSONGO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (106, N'KEMUSU', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (107, N'BOYOLALI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (108, N'NOGOSARI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (109, N'JATIYOSO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (110, N'BRUNO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (111, N'JAKEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (112, N'JUMAPOLO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (113, N'PONJONG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (114, N'TEPUS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (115, N'BEJEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (116, N'GEMAWANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (117, N'TANJUNGSARI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (118, N'SUKOREJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (119, N'PATI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (120, N'PUCAKWANGI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (121, N'RONGKOP', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (122, N'MUSUK', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (123, N'SAMBI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (124, N'MOJOLABAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (125, N'BATANGSARI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (126, N'LOANA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (127, N'KADEWAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (128, N'SALEM', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (129, N'BANYUDONO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (130, N'CILACAP', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (131, N'GEYER', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (132, N'WATES', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (133, N'TAHUNAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (134, N'BUMIAYU', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (135, N'SIDAREJA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (136, N'KAYEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (137, N'MARGOREJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (138, N'PANJANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (139, N'TEGAL SELATAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (140, N'TAWANGHARJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (141, N'PEKALONGAN TIMUR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (142, N'WANASARI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (143, N'BANTAR BOLANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (144, N'KRAMAT', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (145, N'BANDAR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (146, N'PARANGGUPITO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (147, N'JUWANA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (148, N'KRADENAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (149, N'KUNDURAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (150, N'NGUNTORONADI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (151, N'GUMIWANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (152, N'SIDOHARJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (153, N'KANDANG SERANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (154, N'BATURRADEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (155, N'DAYEUH LUHUR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (156, N'GIRISUBO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (157, N'GIRIMULYO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (158, N'MAJENANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (159, N'WANAREJA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (160, N'CIMANGGU', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (161, N'PURBALINGGA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (162, N'KARANGMONCOL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (163, N'KEMBARAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (164, N'PURWOKERTO UTARA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (165, N'UNDAAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (166, N'PATEAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (167, N'PURWOKERTO BARAT', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (168, N'SOKARAJA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (169, N'PURWOREJO KLAMPOK', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (170, N'RAKIT', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (171, N'PEJAGOAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (172, N'SUKOLILO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (173, N'TEGAL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (174, N'PONOROGO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (175, N'PURWODADI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Area] ([Area_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (176, N'Leuwiliang 1', N'admin', CAST(0x0000AA1800E4C524 AS DateTime), N'admin', CAST(0x0000AA1800E4D230 AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_Area] OFF
/****** Object:  Table [dbo].[tblT_UserPayroll]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Project]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_Project] ON
INSERT [dbo].[tblM_Project] ([Project_PK], [Title], [Operator_FK], [DeliveryArea_FK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'Telkomsel Sumatera', 4, 9, N'admin', CAST(0x0000AA1900A274F1 AS DateTime), N'admin', CAST(0x0000AA19014E8BEE AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblM_Project] OFF
/****** Object:  Table [dbo].[tblM_PMHistori]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_Operator]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_Operator] ON
INSERT [dbo].[tblM_Operator] ([Operator_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'HW-H3I', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Operator] ([Operator_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'HW-ISAT', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Operator] ([Operator_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'HW-TSEL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Operator] ([Operator_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'HW-XL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Operator] ([Operator_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'Indosat Aja', N'admin', CAST(0x0000AA1800E02C4D AS DateTime), N'admin', CAST(0x0000AA1800E02C4D AS DateTime), 1)
INSERT [dbo].[tblM_Operator] ([Operator_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'Telkomsel', N'admin', CAST(0x0000AA1800E03622 AS DateTime), N'admin', CAST(0x0000AA1800E4B957 AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_Operator] OFF
/****** Object:  Table [dbo].[tblM_BTSStatus]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_BTSStatus] ON
INSERT [dbo].[tblM_BTSStatus] ([BTSStatus_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'Aktif', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_BTSStatus] ([BTSStatus_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'Rusak', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_BTSStatus] ([BTSStatus_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'Tidak aktif', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblM_BTSStatus] OFF
/****** Object:  Table [dbo].[tblM_BTS]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_BTS] ON
INSERT [dbo].[tblM_BTS] ([BTS_PK], [CustomerSite], [TowerID], [CellID], [Name], [Operator_FK], [StatusBTS_FK], [Longitude], [Latitude], [Area_FK], [Kota_FK], [Cabang_FK], [Alamat], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'SiteIndosat01', N'T01', N'Cell01', N'Tower Mampang', 1, 2, N'9090.1', N'909123', 108, 2, 5, N'Jalan Raya diponegoro', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'admin', CAST(0x0000AA18010F136B AS DateTime), 1)
INSERT [dbo].[tblM_BTS] ([BTS_PK], [CustomerSite], [TowerID], [CellID], [Name], [Operator_FK], [StatusBTS_FK], [Longitude], [Latitude], [Area_FK], [Kota_FK], [Cabang_FK], [Alamat], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'SiteTelkomsel01', N'Tel01', N'Tcell01', N'Tower Mampang Telkomsel', 2, 3, NULL, NULL, 1, 1, 1, N'Mampang', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'admin', CAST(0x0000AA18011076AC AS DateTime), 1)
INSERT [dbo].[tblM_BTS] ([BTS_PK], [CustomerSite], [TowerID], [CellID], [Name], [Operator_FK], [StatusBTS_FK], [Longitude], [Latitude], [Area_FK], [Kota_FK], [Cabang_FK], [Alamat], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'002', N'T043', N'5432211', N'BTS Manggarai', 3, 1, NULL, NULL, 103, 3, 4, N'', N'admin', CAST(0x0000AA18011041AF AS DateTime), N'admin', CAST(0x0000AA1801106EC7 AS DateTime), 1)
INSERT [dbo].[tblM_BTS] ([BTS_PK], [CustomerSite], [TowerID], [CellID], [Name], [Operator_FK], [StatusBTS_FK], [Longitude], [Latitude], [Area_FK], [Kota_FK], [Cabang_FK], [Alamat], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'q', N'q', N'q', N'q', 3, 4, NULL, NULL, 2, 21, 5, N'', N'admin', CAST(0x0000AA1801109E65 AS DateTime), N'admin', CAST(0x0000AA180110C7A2 AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_BTS] OFF
/****** Object:  Table [dbo].[tblM_KategoriJabatan]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_KategoriJabatan] ON
INSERT [dbo].[tblM_KategoriJabatan] ([KategoriJabatan_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'Team Lead', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_KategoriJabatan] ([KategoriJabatan_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'DT', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_KategoriJabatan] ([KategoriJabatan_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'Rigger', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_KategoriJabatan] ([KategoriJabatan_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'Surveyor', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_KategoriJabatan] ([KategoriJabatan_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'RF', N'admin', CAST(0x0000AA190134A996 AS DateTime), N'admin', CAST(0x0000AA190134A996 AS DateTime), 1)
INSERT [dbo].[tblM_KategoriJabatan] ([KategoriJabatan_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'RNO', N'admin', CAST(0x0000AA190134B2BE AS DateTime), N'admin', CAST(0x0000AA190134B2BE AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblM_KategoriJabatan] OFF
/****** Object:  Table [dbo].[tblM_IzinCutiStatus]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblM_DeliveryArea]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_DeliveryArea] ON
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'Central Java', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'East Java', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'Sulawesi', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'Central Java', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'East Java', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'Sulawesi', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, N'LAMPUNG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, N'JAMBI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, N'BENGKULU', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, N'PALEMBANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, N'BALOM', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, N'South Sumatra', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, N'North Sumatra', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_DeliveryArea] ([DeliveryArea_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, N'Chinas', N'admin', CAST(0x0000AA1900942BFB AS DateTime), N'admin', CAST(0x0000AA19009439D5 AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_DeliveryArea] OFF
/****** Object:  Table [dbo].[tblM_CostKategori]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_CostKategori] ON
INSERT [dbo].[tblM_CostKategori] ([CostKategori_PK], [Title], [Order], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'Tiket pesawat', 1, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_CostKategori] ([CostKategori_PK], [Title], [Order], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'Sewa mobil', 2, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_CostKategori] ([CostKategori_PK], [Title], [Order], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'Lain-lain', 3, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_CostKategori] ([CostKategori_PK], [Title], [Order], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'Makan', 0, N'admin', CAST(0x0000AA190093EDF7 AS DateTime), N'admin', CAST(0x0000AA1900941887 AS DateTime), 1)
INSERT [dbo].[tblM_CostKategori] ([CostKategori_PK], [Title], [Order], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'BBM', 0, N'admin', CAST(0x0000AA190093F5C6 AS DateTime), N'admin', CAST(0x0000AA190093F5C6 AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_CostKategori] OFF
/****** Object:  Table [dbo].[tblM_Status]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_Status] ON
INSERT [dbo].[tblM_Status] ([Status_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate]) VALUES (1, N'Active', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime))
INSERT [dbo].[tblM_Status] ([Status_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate]) VALUES (2, N'Inactive', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime))
INSERT [dbo].[tblM_Status] ([Status_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate]) VALUES (3, N'Deleted', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime))
SET IDENTITY_INSERT [dbo].[tblM_Status] OFF
/****** Object:  Table [dbo].[tblM_RoleGroup]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_RoleGroup] ON
INSERT [dbo].[tblM_RoleGroup] ([RoleGroup_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'Admin', N'User admin', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_RoleGroup] ([RoleGroup_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'HRD', N'User HRD', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_RoleGroup] ([RoleGroup_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'Direksi', N'Group direksi', N'admin', CAST(0x0000AA1200E2D270 AS DateTime), N'admin', CAST(0x0000AA1200E2D270 AS DateTime), 3)
INSERT [dbo].[tblM_RoleGroup] ([RoleGroup_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'IT', N'Group dept. IT', N'admin', CAST(0x0000AA1200E2E7FA AS DateTime), N'admin', CAST(0x0000AA1200E2E7FA AS DateTime), 3)
INSERT [dbo].[tblM_RoleGroup] ([RoleGroup_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'Bid', N'Bid', N'admin', CAST(0x0000AA1200E39815 AS DateTime), N'admin', CAST(0x0000AA1200E39815 AS DateTime), 3)
INSERT [dbo].[tblM_RoleGroup] ([RoleGroup_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'direksi', N'group direksi', N'admin', CAST(0x0000AA1200E98A2D AS DateTime), N'admin', CAST(0x0000AA1200E98A2D AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblM_RoleGroup] OFF
/****** Object:  Table [dbo].[tblM_Role]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_Role] ON
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'BTS_Input', N'Input data pada halaman master data BTS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A85B00000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'BTS_Edit', N'Edit data pada halaman master data BTS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'admin', CAST(0x0000AA1301381683 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'BTS_Delete', N'Delete data pada halaman master data BTS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'BTS_ViewAll', N'View all data pada halaman master data BTS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, N'User_Input', N'Input data pada halaman master data user', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A85B00000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, N'User_Edit', N'Edit data pada halaman master data user', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, N'User_Delete', N'Delete data pada halaman master data user', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, N'User_ViewAll', N'View all data pada halaman master data user', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 3)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, N'Role_Input', N'Input data pada halaman master data role', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A85B00000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, N'Role_Edit', N'Edit data pada halaman master data role', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, N'Role_Delete', N'Delete data pada halaman master data role', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, N'Role_ViewAll', N'View all data pada halaman master data role', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, N'RoleGroup_Input', N'Input data pada halaman master data role group', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A85B00000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (16, N'RoleGroup_Edit', N'Edit data pada halaman master data role group', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (17, N'RoleGroup_Delete', N'Delete data pada halaman master data role group', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (18, N'RoleGroup_ViewAll', N'View all data pada halaman master data role group', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (20, N'Role Baru', N'Percobaan Update', N'admin', CAST(0x0000AA1200A47917 AS DateTime), N'admin', CAST(0x0000AA1200A56F3A AS DateTime), 3)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (21, N'asdf', N'asdf', N'admin', CAST(0x0000AA1200C94865 AS DateTime), N'admin', CAST(0x0000AA1200C9751B AS DateTime), 3)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (22, N'Barang baru', N'test', N'admin', CAST(0x0000AA1200D485FA AS DateTime), N'admin', CAST(0x0000AA1200D485FA AS DateTime), 3)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (23, N'Ceritanya', N'ok', N'admin', CAST(0x0000AA1200D492BF AS DateTime), N'admin', CAST(0x0000AA1200D492BF AS DateTime), 3)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (24, N'makan', N'siang', N'admin', CAST(0x0000AA1200D49D0B AS DateTime), N'admin', CAST(0x0000AA1200D49D0B AS DateTime), 3)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (25, N'asdf', N'asdf', N'admin', CAST(0x0000AA1200D72DDB AS DateTime), N'admin', CAST(0x0000AA1200D7340B AS DateTime), 3)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (26, N'Barang baru', N'Barang baru', N'admin', CAST(0x0000AA1200D7471F AS DateTime), N'admin', CAST(0x0000AA1200D7471F AS DateTime), 3)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (27, N'Role Baru', N'buat super admin', N'admin', CAST(0x0000AA1200E92216 AS DateTime), N'admin', CAST(0x0000AA1200E92216 AS DateTime), 1)
INSERT [dbo].[tblM_Role] ([Role_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (28, N'asdf', N'aasdf', N'admin', CAST(0x0000AA1300E0C060 AS DateTime), N'admin', CAST(0x0000AA1300E0C060 AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_Role] OFF
/****** Object:  Table [dbo].[tblM_Cabang]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_Cabang] ON
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'TEGAL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'PURWOKERTO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'SOLO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'JEPARA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'KUDUS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'MAGELANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, N'YOGYA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, N'Pemalang', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, N'PEKALONGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, N'MANADO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, N'MAKASSAR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, N'Sulawesi', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, N'LAMPUNG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, N'JAMBI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, N'BENGKULU', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (16, N'PALEMBANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (17, N'BALOM', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (18, N'South Sumatra', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (19, N'North Sumatra', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Cabang] ([Cabang_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (20, N'KUDUS aja', N'admin', CAST(0x0000AA1800E510BB AS DateTime), N'admin', CAST(0x0000AA1800E521E1 AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_Cabang] OFF
/****** Object:  Table [dbo].[tblM_AuthParam]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_AuthParam] ON
INSERT [dbo].[tblM_AuthParam] ([AuthParam_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'Makan siang', N'Di Restoran Padang yang murah', N'admin', CAST(0x0000AA1200E74A42 AS DateTime), N'admin', CAST(0x0000AA1200E74A42 AS DateTime), 3)
INSERT [dbo].[tblM_AuthParam] ([AuthParam_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'Entah ini', N'datanya apa', N'admin', CAST(0x0000AA1200E76387 AS DateTime), N'admin', CAST(0x0000AA1200E76387 AS DateTime), 3)
INSERT [dbo].[tblM_AuthParam] ([AuthParam_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'a01', N'baba', N'admin', CAST(0x0000AA1200E78A9E AS DateTime), N'admin', CAST(0x0000AA1200E78A9E AS DateTime), 3)
INSERT [dbo].[tblM_AuthParam] ([AuthParam_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'a01', N'xxxxx', N'admin', CAST(0x0000AA1200E9C962 AS DateTime), N'admin', CAST(0x0000AA1200E9C962 AS DateTime), 1)
INSERT [dbo].[tblM_AuthParam] ([AuthParam_PK], [Title], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'p01', N'p0', N'admin', CAST(0x0000AA170144DA9C AS DateTime), N'admin', CAST(0x0000AA17014545DE AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblM_AuthParam] OFF
/****** Object:  Table [dbo].[tblM_AsetKategori]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_AsetKategori] ON
INSERT [dbo].[tblM_AsetKategori] ([AsetKategori_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'Handphone', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_AsetKategori] ([AsetKategori_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'Laptop', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_AsetKategori] ([AsetKategori_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'Light Vehicle', N'admin', CAST(0x0000AA170159F06E AS DateTime), N'admin', CAST(0x0000AA170159F06E AS DateTime), 1)
INSERT [dbo].[tblM_AsetKategori] ([AsetKategori_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'ATK', N'admin', CAST(0x0000AA170159FF27 AS DateTime), N'admin', CAST(0x0000AA170159FF27 AS DateTime), 3)
INSERT [dbo].[tblM_AsetKategori] ([AsetKategori_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'Alat Kantor', N'admin', CAST(0x0000AA17015A05EE AS DateTime), N'admin', CAST(0x0000AA17015A05EE AS DateTime), 3)
INSERT [dbo].[tblM_AsetKategori] ([AsetKategori_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'Pulpen', N'admin', CAST(0x0000AA17015A0BAD AS DateTime), N'admin', CAST(0x0000AA17015A0BAD AS DateTime), 3)
INSERT [dbo].[tblM_AsetKategori] ([AsetKategori_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, N'Kipas Angin', N'admin', CAST(0x0000AA17015A2982 AS DateTime), N'admin', CAST(0x0000AA17015A2982 AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_AsetKategori] OFF
/****** Object:  Table [dbo].[tblM_MappingUserToRoleGroup]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[tblM_MappingUserToRoleGroup] ([User_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, 1, N'admin', CAST(0x0000AA1601169541 AS DateTime), N'admin', CAST(0x0000AA1601169541 AS DateTime), 1)
INSERT [dbo].[tblM_MappingUserToRoleGroup] ([User_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, 2, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
/****** Object:  Table [dbo].[tblM_MappingUserToAuthParam]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[tblM_MappingUserToAuthParam] ([User_PK], [AuthParam_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, 4, N'admin', CAST(0x0000AA16011F513D AS DateTime), N'admin', CAST(0x0000AA16011F513D AS DateTime), 1)
INSERT [dbo].[tblM_MappingUserToAuthParam] ([User_PK], [AuthParam_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, 4, N'admin', CAST(0x0000AA16011F2764 AS DateTime), N'admin', CAST(0x0000AA16011F2764 AS DateTime), 1)
/****** Object:  Table [dbo].[tblM_MappingRoleToRoleGroup]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, 2, N'admin', CAST(0x0000AA1601103275 AS DateTime), N'admin', CAST(0x0000AA1601103275 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, 2, N'admin', CAST(0x0000AA1601103275 AS DateTime), N'admin', CAST(0x0000AA1601103275 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, 2, N'admin', CAST(0x0000AA1601103275 AS DateTime), N'admin', CAST(0x0000AA1601103275 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, 2, N'admin', CAST(0x0000AA1601103275 AS DateTime), N'admin', CAST(0x0000AA1601103275 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, 2, N'admin', CAST(0x0000AA1601103275 AS DateTime), N'admin', CAST(0x0000AA1601103275 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, 2, N'admin', CAST(0x0000AA1601103275 AS DateTime), N'admin', CAST(0x0000AA1601103275 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, 2, N'admin', CAST(0x0000AA1601103275 AS DateTime), N'admin', CAST(0x0000AA1601103275 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (16, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (16, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (17, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (17, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (18, 1, N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), N'admin', CAST(0x0000AA15012BB2F5 AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (18, 6, N'admin', CAST(0x0000AA14017875EF AS DateTime), N'admin', CAST(0x0000AA14017875EF AS DateTime), 1)
INSERT [dbo].[tblM_MappingRoleToRoleGroup] ([Role_PK], [RoleGroup_PK], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (27, 2, N'admin', CAST(0x0000AA1601103275 AS DateTime), N'admin', CAST(0x0000AA1601103275 AS DateTime), 1)
/****** Object:  Table [dbo].[tblM_Kota]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_Kota] ON
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'KABUPATEN BREBES', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'KABUPATEN BANYUMAS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'KABUPATEN CILACAP', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'KABUPATEN TEGAL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'KABUPATEN SRAGEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'KABUPATEN BANJARNEGARA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, N'KABUPATEN PEMALANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, N'KABUPATEN REMBANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, N'KABUPATEN WONOGIRI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, N'KOTA YOGYAKARTA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, N'KABUPATEN GUNUNG KIDUL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, N'KABUPATEN BLORA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, N'KABUPATEN KEBUMEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, N'KABUPATEN KARANGANYAR', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, N'KABUPATEN PATI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (16, N'KABUPATEN PURBALINGGA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (17, N'KABUPATEN WONOSOBO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (18, N'KABUPATEN GROBOGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (19, N'Kota Pemalang', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (20, N'KABUPATEN PEKALONGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (21, N'KABUPATEN BATANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (22, N'KABUPATEN KULON PROGO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (23, N'KABUPATEN JEPARA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (24, N'KABUPATEN BOYOLALI', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (25, N'KOTA SURAKARTA', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (26, N'KABUPATEN SUKOHARJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (27, N'KOTA TEGAL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (28, N'KABUPATEN KUDUS', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (29, N'KOTA PEKALONGAN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (30, N'KABUPATEN KLATEN', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (31, N'KABUPATEN PURWOREJO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (32, N'KABUPATEN TEMANGGUNG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (33, N'KABUPATEN KENDAL', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (34, N'KABUPATEN BOJONEGORO', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (35, N'KABUPATEN SEMARANG', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Kota] ([Kota_PK], [Title], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (36, N'Banjarbaru', N'admin', CAST(0x0000AA1800E4EBC8 AS DateTime), N'admin', CAST(0x0000AA1800E4F70B AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_Kota] OFF
/****** Object:  Table [dbo].[tblM_UserDetail]    Script Date: 03/24/2019 23:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[tblM_UserDetail] ON
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'G0001', N'Indra Suryajaya', CAST(0xEC180B00 AS Date), NULL, N'3275202929', N'081290980000', N'indra.suryajaya@kairos-it.com', N'Alamat 1', NULL, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 3)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'dadang', N'Dadang', CAST(0xC3150B00 AS Date), NULL, N'3275020202', N'081290909090', N'i.s@gmail.com', N'Alamat 1.2.3', NULL, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'admin', CAST(0x0000AA1A009DCB1C AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, N'irpan', N'irpan supendi', CAST(0x00000000 AS Date), NULL, N'303039129012', N'08129090909', N'irpan@rma.com', N'Jakarta - Bogor', NULL, N'admin', CAST(0x0000AA1301036664 AS DateTime), N'admin', CAST(0x0000AA13012EC9D3 AS DateTime), 3)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, N'irpan', N'Irpan Supendi', CAST(0x00000000 AS Date), NULL, N'32750202', N'081290909', N'123', N'Jakarta - Bogor', N'123', N'admin', CAST(0x0000AA1301303405 AS DateTime), N'admin', CAST(0x0000AA1301303405 AS DateTime), 3)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, N'sadf', N'irpan supendi', CAST(0x00000000 AS Date), NULL, N'asdf', N'98912', N'irpan@rma.com', N'asdf', NULL, N'admin', CAST(0x0000AA130130A92D AS DateTime), N'admin', CAST(0x0000AA130130A92D AS DateTime), 3)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, N'irpan2', N'irpan supendi', CAST(0x00000000 AS Date), NULL, N'32750202022', N'08122', N'irpan@rma.com2', N'Alamat 1.2.3', NULL, N'admin', CAST(0x0000AA130131CC08 AS DateTime), N'admin', CAST(0x0000AA130131CC08 AS DateTime), 3)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, N'asdf', N'Denny Samudra', CAST(0x00000000 AS Date), NULL, N'asdf', N'0812222', N'irpan@rma.com22', N'asdf', N'asdf', N'admin', CAST(0x0000AA130134504A AS DateTime), N'admin', CAST(0x0000AA15010A062F AS DateTime), 3)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, N'admin@gmail.com', N'Deny Sumargo', CAST(0x00000000 AS Date), NULL, N'123', N'08129090909012', N'123', N'Jalan jalan', N'123123', N'admin', CAST(0x0000AA1500FF76BF AS DateTime), N'admin', CAST(0x0000AA1A009A9E1E AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, N'irpan', N'Irpan Supendi', CAST(0x00000000 AS Date), NULL, N'09', N'09', N'09', N'Jakarta', NULL, N'admin', CAST(0x0000AA1601309F52 AS DateTime), N'admin', CAST(0x0000AA1601309F52 AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, N'dini', N'Dini Andini', CAST(0x00000000 AS Date), NULL, N'-', N'-', N'-', N'Jalan Asem Raya', NULL, N'admin', CAST(0x0000AA1900B0AE05 AS DateTime), N'admin', CAST(0x0000AA1A009ADCAD AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (16, N'andi', N'Andi Setiawan', CAST(0x00000000 AS Date), NULL, N'1234', N'08900', N'andi@g.com', N'Jalan tegal waru', NULL, N'admin', CAST(0x0000AA1A009B3D3B AS DateTime), N'admin', CAST(0x0000AA1A009B3D3B AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (17, N'maarif', N'Maarif', CAST(0x00000000 AS Date), NULL, N'124', N'0811', N'arif@g.com', N'South wales', NULL, N'admin', CAST(0x0000AA1A009B95FC AS DateTime), N'admin', CAST(0x0000AA1A009B95FC AS DateTime), 3)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (18, N'shinta', N'Shinta', CAST(0x00000000 AS Date), NULL, N'125', N'0823', N'shinta@g.com', N'Kemang', NULL, N'admin', CAST(0x0000AA1A009BD3F1 AS DateTime), N'admin', CAST(0x0000AA1A009BD3F1 AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (19, N'anita', N'anita', CAST(0x00000000 AS Date), NULL, N'126', N'0825', N'anita@a.com', N'Cilandak', NULL, N'admin', CAST(0x0000AA1A009C0878 AS DateTime), N'admin', CAST(0x0000AA1A009C0878 AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (20, N'riko', N'riko', CAST(0x00000000 AS Date), NULL, N'127', N'0898', N'riko@s.com', N'Cilandak', NULL, N'admin', CAST(0x0000AA1A009C7D7D AS DateTime), N'admin', CAST(0x0000AA1A009C7D7D AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (21, N'santo', N'santo', CAST(0x00000000 AS Date), NULL, N'128', N'0878', N'santo@s.com', N'Cimone', NULL, N'admin', CAST(0x0000AA1A009CC392 AS DateTime), N'admin', CAST(0x0000AA1A009CC392 AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (22, N'wahyu', N'Wahyu Selow', CAST(0x00000000 AS Date), NULL, N'01', N'08123', N'wahyu@selow.com', N'Sudirman', NULL, N'admin', CAST(0x0000AA1A009D1D4D AS DateTime), N'admin', CAST(0x0000AA1A009D1D4D AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (23, N'taufik', N'Taufik', CAST(0x00000000 AS Date), NULL, N'1234567', N'08112', N'taufik@ismal.com', N'Bekasi', NULL, N'admin', CAST(0x0000AA1A009D666D AS DateTime), N'admin', CAST(0x0000AA1A009D666D AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (24, N'once', N'Once', CAST(0x00000000 AS Date), NULL, N'1290', N'0813890', N'once@rcm.com', N'Jakarta', NULL, N'admin', CAST(0x0000AA1A00AA596C AS DateTime), N'admin', CAST(0x0000AA1A00AA596C AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (25, N'mike', N'Mike', CAST(0x00000000 AS Date), NULL, N'890809', N'081239', N'mike@gmail.com', N'Jakarta', NULL, N'admin', CAST(0x0000AA1A00AA9EEB AS DateTime), N'admin', CAST(0x0000AA1A00AA9EEB AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (26, N'ahmad', N'ahmad', CAST(0x00000000 AS Date), NULL, N'12309', N'0811232', N'ahmad@msn.com', N'Cilandak', NULL, N'admin', CAST(0x0000AA1A00AB154E AS DateTime), N'admin', CAST(0x0000AA1A00AB154E AS DateTime), 1)
INSERT [dbo].[tblM_UserDetail] ([UserDetail_PK], [UserCode], [Name], [TglLahir], [FilePhoto], [NoKTP], [NoHP], [Email], [Address], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (27, N'rizky', N'Rizky', CAST(0x00000000 AS Date), NULL, N'879731', N'08777', N'rizky@hotmail.com', N'Cilandak', NULL, N'admin', CAST(0x0000AA1A00AB47CC AS DateTime), N'admin', CAST(0x0000AA1A00AB47CC AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblM_UserDetail] OFF
/****** Object:  Table [dbo].[tblM_User]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblM_User] ON
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, 4, 0, N'UserG0001', N'(diencryp)', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 3)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, 5, 2, N'dadang', N'7197dee11bee0a2e6cbf1436c74b2d28', N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'admin', CAST(0x0000AA1A009DCB1C AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, 8, 0, N'irpan', N'supendi1233', N'admin', CAST(0x0000AA1301036664 AS DateTime), N'admin', CAST(0x0000AA13012EC9D3 AS DateTime), 3)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, 9, 0, N'irpan', N'irpan123', N'admin', CAST(0x0000AA1301303405 AS DateTime), N'admin', CAST(0x0000AA1301303405 AS DateTime), 3)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, 10, 0, N'sadf', N'sadf', N'admin', CAST(0x0000AA130130A92D AS DateTime), N'admin', CAST(0x0000AA130130A92D AS DateTime), 3)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, 11, 0, N'irpan2', N'123', N'admin', CAST(0x0000AA130131CC08 AS DateTime), N'admin', CAST(0x0000AA130131CC08 AS DateTime), 3)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, 12, 3, N'asdf', N'e3d62c4e5a3db420b797ec6fd5081acc', N'admin', CAST(0x0000AA130134504A AS DateTime), N'admin', CAST(0x0000AA15010A062F AS DateTime), 3)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, 13, 3, N'admin@gmail.com', N'1cc39ffd758234422e1f75beadfc5fb2', N'admin', CAST(0x0000AA1500FF76BF AS DateTime), N'admin', CAST(0x0000AA1A009A9E1E AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, 14, 2, N'irpan', N'063ea9a2f7dc8b57386402e7eb3ec652', N'admin', CAST(0x0000AA1601309F52 AS DateTime), N'admin', CAST(0x0000AA1601309F52 AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, 15, 4, N'dini', N'd9b1d7db4cd6e70935368a1efb10e377', N'admin', CAST(0x0000AA1900B0AE05 AS DateTime), N'admin', CAST(0x0000AA1A009ADCAD AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, 16, 2, N'andi', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A009B3D3B AS DateTime), N'admin', CAST(0x0000AA1A009B3D3B AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (14, 17, 5, N'maarif', N'd53d757c0f838ea49fb46e09cbcc3cb1', N'admin', CAST(0x0000AA1A009B95FC AS DateTime), N'admin', CAST(0x0000AA1A009B95FC AS DateTime), 3)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (15, 18, 3, N'shinta', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A009BD3F1 AS DateTime), N'admin', CAST(0x0000AA1A009BD3F1 AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (16, 19, 6, N'anita', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A009C0878 AS DateTime), N'admin', CAST(0x0000AA1A009C0878 AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (17, 20, 4, N'riko', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A009C7D7D AS DateTime), N'admin', CAST(0x0000AA1A009C7D7D AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (18, 21, 6, N'santo', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A009CC392 AS DateTime), N'admin', CAST(0x0000AA1A009CC392 AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (19, 22, 4, N'wahyu', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A009D1D4D AS DateTime), N'admin', CAST(0x0000AA1A009D1D4D AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (20, 23, 3, N'taufik', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A009D666D AS DateTime), N'admin', CAST(0x0000AA1A009D666D AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (21, 24, 5, N'once', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A00AA596C AS DateTime), N'admin', CAST(0x0000AA1A00AA596C AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (22, 25, 1, N'mike', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A00AA9EEB AS DateTime), N'admin', CAST(0x0000AA1A00AA9EEB AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (23, 26, 5, N'ahmad', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A00AB154E AS DateTime), N'admin', CAST(0x0000AA1A00AB154E AS DateTime), 1)
INSERT [dbo].[tblM_User] ([User_PK], [UserDetail_FK], [KategoriJabatan_FK], [Username], [Password], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (24, 27, 1, N'rizky', N'202cb962ac59075b964b07152d234b70', N'admin', CAST(0x0000AA1A00AB47CC AS DateTime), N'admin', CAST(0x0000AA1A00AB47CC AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblM_User] OFF
/****** Object:  Table [dbo].[tblM_Aset]    Script Date: 03/24/2019 23:14:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[tblM_Aset] ON
INSERT [dbo].[tblM_Aset] ([Aset_PK], [KategoriAset_FK], [AsetID], [Name], [FilePhoto], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, 1, N'1212', N'Samsung S6 G1212', NULL, NULL, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Aset] ([Aset_PK], [KategoriAset_FK], [AsetID], [Name], [FilePhoto], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, 1, N'1214', N'Samsung S6 G1214', NULL, NULL, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Aset] ([Aset_PK], [KategoriAset_FK], [AsetID], [Name], [FilePhoto], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, 2, N'1311', N'Asus G1311', NULL, NULL, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Aset] ([Aset_PK], [KategoriAset_FK], [AsetID], [Name], [FilePhoto], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, 2, N'1312', N'Asus G1312', NULL, NULL, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblM_Aset] ([Aset_PK], [KategoriAset_FK], [AsetID], [Name], [FilePhoto], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, 1, N'A01', N'Lenovo Laptop T420', NULL, NULL, N'admin', CAST(0x0000AA17016D27CC AS DateTime), N'admin', CAST(0x0000AA17016D8C36 AS DateTime), 1)
INSERT [dbo].[tblM_Aset] ([Aset_PK], [KategoriAset_FK], [AsetID], [Name], [FilePhoto], [Description], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, 3, N'K09', N'Motor Mio Sporty', NULL, N'Barang inventaris yang di berikan kepada bang arfro', N'admin', CAST(0x0000AA17016DF96B AS DateTime), N'admin', CAST(0x0000AA17016E713B AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblM_Aset] OFF
/****** Object:  Table [dbo].[tblT_UserHistori]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblT_UserHistori] ON
INSERT [dbo].[tblT_UserHistori] ([UserHistori_PK], [UserDetail_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, 4, CAST(0x0000A85B00000000 AS DateTime), CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblT_UserHistori] ([UserHistori_PK], [UserDetail_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, 5, CAST(0x0000A9C900000000 AS DateTime), NULL, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblT_UserHistori] ([UserHistori_PK], [UserDetail_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, 4, CAST(0x0000A9D600000000 AS DateTime), NULL, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblT_UserHistori] OFF
/****** Object:  Table [dbo].[tblT_AsetHistori]    Script Date: 03/24/2019 23:14:52 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblT_AsetHistori] ON
INSERT [dbo].[tblT_AsetHistori] ([AsetHistori_PK], [UserDetail_FK], [Aset_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, 4, 1, CAST(0x0000A9C800000000 AS DateTime), CAST(0x0000A9C900000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
INSERT [dbo].[tblT_AsetHistori] ([AsetHistori_PK], [UserDetail_FK], [Aset_FK], [TglMulai], [TglSelesai], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, 4, 2, CAST(0x0000A9E800000000 AS DateTime), NULL, N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), N'SYSTEM', CAST(0x0000A9C800000000 AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tblT_AsetHistori] OFF
/****** Object:  Default [DF_tblM_User_RoleGroup_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_User] ADD  CONSTRAINT [DF_tblM_User_RoleGroup_FK]  DEFAULT ((0)) FOR [KategoriJabatan_FK]
GO
/****** Object:  Default [DF_tblT_Cost_Nominal]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblT_Cost] ADD  CONSTRAINT [DF_tblT_Cost_Nominal]  DEFAULT ((0)) FOR [Nominal]
GO
/****** Object:  ForeignKey [FK_tblM_Aset_KategoriAset_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_Aset]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Aset_KategoriAset_FK] FOREIGN KEY([KategoriAset_FK])
REFERENCES [dbo].[tblM_AsetKategori] ([AsetKategori_PK])
GO
ALTER TABLE [dbo].[tblM_Aset] CHECK CONSTRAINT [FK_tblM_Aset_KategoriAset_FK]
GO
/****** Object:  ForeignKey [FK_tblM_Aset_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_Aset]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Aset_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_Aset] CHECK CONSTRAINT [FK_tblM_Aset_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_KategoriAset_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_AsetKategori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_KategoriAset_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_AsetKategori] CHECK CONSTRAINT [FK_tblM_KategoriAset_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_AuthParam_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_AuthParam]  WITH CHECK ADD  CONSTRAINT [FK_tblM_AuthParam_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_AuthParam] CHECK CONSTRAINT [FK_tblM_AuthParam_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_Cabang_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_Cabang]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Cabang_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_Cabang] CHECK CONSTRAINT [FK_tblM_Cabang_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_Kota_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_Kota]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Kota_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_Kota] CHECK CONSTRAINT [FK_tblM_Kota_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_MappingRoleToRoleGroup_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_MappingRoleToRoleGroup]  WITH CHECK ADD  CONSTRAINT [FK_tblM_MappingRoleToRoleGroup_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_MappingRoleToRoleGroup] CHECK CONSTRAINT [FK_tblM_MappingRoleToRoleGroup_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_MappingUserToAuthParam_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_MappingUserToAuthParam]  WITH CHECK ADD  CONSTRAINT [FK_tblM_MappingUserToAuthParam_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_MappingUserToAuthParam] CHECK CONSTRAINT [FK_tblM_MappingUserToAuthParam_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_MappingUserToRoleGroup_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_MappingUserToRoleGroup]  WITH CHECK ADD  CONSTRAINT [FK_tblM_MappingUserToRoleGroup_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_MappingUserToRoleGroup] CHECK CONSTRAINT [FK_tblM_MappingUserToRoleGroup_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_Role_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_Role]  WITH CHECK ADD  CONSTRAINT [FK_tblM_Role_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_Role] CHECK CONSTRAINT [FK_tblM_Role_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_User_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_User]  WITH CHECK ADD  CONSTRAINT [FK_tblM_User_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_User] CHECK CONSTRAINT [FK_tblM_User_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_User_UserDetail_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_User]  WITH CHECK ADD  CONSTRAINT [FK_tblM_User_UserDetail_FK] FOREIGN KEY([UserDetail_FK])
REFERENCES [dbo].[tblM_UserDetail] ([UserDetail_PK])
GO
ALTER TABLE [dbo].[tblM_User] CHECK CONSTRAINT [FK_tblM_User_UserDetail_FK]
GO
/****** Object:  ForeignKey [FK_tblM_UserDetail_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblM_UserDetail]  WITH CHECK ADD  CONSTRAINT [FK_tblM_UserDetail_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblM_UserDetail] CHECK CONSTRAINT [FK_tblM_UserDetail_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_AsetHistori_Aset_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblT_AsetHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_AsetHistori_Aset_FK] FOREIGN KEY([Aset_FK])
REFERENCES [dbo].[tblM_Aset] ([Aset_PK])
GO
ALTER TABLE [dbo].[tblT_AsetHistori] CHECK CONSTRAINT [FK_tblM_AsetHistori_Aset_FK]
GO
/****** Object:  ForeignKey [FK_tblM_AsetHistori_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblT_AsetHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_AsetHistori_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblT_AsetHistori] CHECK CONSTRAINT [FK_tblM_AsetHistori_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_AsetHistori_UserDetail_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblT_AsetHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_AsetHistori_UserDetail_FK] FOREIGN KEY([UserDetail_FK])
REFERENCES [dbo].[tblM_UserDetail] ([UserDetail_PK])
GO
ALTER TABLE [dbo].[tblT_AsetHistori] CHECK CONSTRAINT [FK_tblM_AsetHistori_UserDetail_FK]
GO
/****** Object:  ForeignKey [FK_tblM_UserHistori_Status_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblT_UserHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_UserHistori_Status_FK] FOREIGN KEY([Status_FK])
REFERENCES [dbo].[tblM_Status] ([Status_PK])
GO
ALTER TABLE [dbo].[tblT_UserHistori] CHECK CONSTRAINT [FK_tblM_UserHistori_Status_FK]
GO
/****** Object:  ForeignKey [FK_tblM_UserHistori_UserDetail_FK]    Script Date: 03/24/2019 23:14:52 ******/
ALTER TABLE [dbo].[tblT_UserHistori]  WITH CHECK ADD  CONSTRAINT [FK_tblM_UserHistori_UserDetail_FK] FOREIGN KEY([UserDetail_FK])
REFERENCES [dbo].[tblM_UserDetail] ([UserDetail_PK])
GO
ALTER TABLE [dbo].[tblT_UserHistori] CHECK CONSTRAINT [FK_tblM_UserHistori_UserDetail_FK]
GO
