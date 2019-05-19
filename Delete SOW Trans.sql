begin transaction

	delete tblT_CheckIn

	delete tblT_SOWTrackResult
	delete tblT_SOWTrack

	delete tblT_SOWResultDetail
	delete tblT_SOWResult

	delete tblT_SOWAssign
	delete tblT_SOWIssue
	delete tblT_SOW
--commit
rollback
