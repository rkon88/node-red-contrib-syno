var unknowHelp = 'Don\'t know what that does.<br/>If you know, including the input data, please send me.'; 
var unknownCalls = [
	'listVsDevices',
	'listCmsDevices',
	'getServiceSetTingDevice',
	'liveStreamStreaming',
	'eventStreamStreaming',
	'streamAudio',
	'openAudioStream',
	'closeAudioStream',
	'queryAudioStream',
	'streamVideo',
	'openVideoStream',
	'closeVideoStream',
	'queryVideoStream',
	'enumVisualStation',
	'addVisualStation',
	'deleteVisualStation',
	'editVisualStation',
	'enableVisualStation',
	'disableVisualStation',
	'lockVisualStation',
	'unlockVisualStation',
	'fetchConfigVisualStation',
	'vsCmsSyncVisualStation',
	'reqNetConfigVisualStation',
	'enumVisualStationLayout',
	'saveVisualStationLayout',
	'deleteVisualStationLayout',
	'startVisualStationSearch',
	'stopVisualStationSearch',
	'infoGetVisualStationSearch',
	'searchIpVisualStationSearch',
	'streamVideoing',
	'queryVideoStreaming',
	'enumUserPrivilege',
	'loadProfileUserPrivilege',
	'loadOptionsUserPrivilege',
	'detailUserPrivilege',
	'checkUsernameUserPrivilege',
	'checkPwdrulesUserPrivilege',
	'checkUserExistUserPrivilege',
	'saveOptionsUserPrivilege',
	'cancelUserPrivilege',
	'deleteProfileUserPrivilege',
	'editUserUserPrivilege',
	'editPrivilegeUserPrivilege',
	'enableUserPrivilege',
	'disableUserPrivilege',
	'deleteUserUserPrivilege',
	'createUserUserPrivilege',
	'saveViewModeUserPrivilege',
	'checkHomeEnableUserPrivilege',
	'downloadUserPrivilege',
	'setRemindQuickConnectTunnelUserPrivilege',
	'listTaskQueues',
	'clearTaskQueue',
	'getSetTingTaskQueue',
	'setSettingTaskQueue',
	'rebootSystem',
	'shutdownSystem',
	'networkSystem',
	'infoSystem',
	'timeGetSystem',
	'timeSetSystem',
	'syncNtpSystem',
	'getFirmwareInfoSystem',
	'checkUpgradeEnvSystem',
	'upgradeSystem',
	'getUpgradeProgressSystem',
	'autoUpdateEnableSystem',
	'autoUpdateDIsableSystem',
	'languageSystem',
	'setWriteCacheSystem',
	'getTlsProfileSystem',
	'eventStream',
	'eventMultipartFetchStream',
	'setSort',
	'listSnapShots',
	'countByCategorySnapShot',
	'chkFileExistSnapShot',
	'downloadSnapShot',
	'chkContainLockedSnapShot',
	'getSetTingSnapShot',
	'saveSetTingSnapShot',
	'loadSnapShot',
	'chkValidSnapShot',
	'saveSnapShot',
	'editSnapShot',
	'lockSnapShot',
	'unlockSnapShot',
	'lockFilteredSnapShot',
	'unlockFilteredSnapShot',
	'deleteSnapShot',
	'deleteFilteredSnapShot',
	'takeSnapShot',
	'listShares',
	'listRecShares',
	'createRecShare',
	'delRecShare',
	'editRecShare',
	'listUsingCamShares',
	'checkStorageMigratingShare',
	'listMountedFolderShares',
	'createRemoteRecShare',
	'reconnetRemoteMountShare',
	'enumIntervalRecordingPicker',
	'recordPartialInfoRecordingPicker',
	'searchAvaiDateRecordingPicker',
	'queryRecording',
	'deleteMultiRecording',
	'deleteFilterRecording',
	'deleteAllRecording',
	'listRecordings',
	'countByCategoryRecording',
	'lockRecording',
	'unLockRecording',
	'lockFilterRecording',
	'unLockFilterRecording',
	'tRunCRecording',
	'keepAliveRecording',
	'downloadRecording',
	'saveMigrateEventRecording',
	'delMigratedEventRecording',
	'checkEventValidRecording',
	'loadAdvancedRecording',
	'applyAdvancedRecording',
	'updateIndexRecording',
	'eventFlushHeaderRecording',
	'playErGetProgressRecording',
	'playErPauseResumeRecording',
	'eventSourceEnumRecording',
	'eventEnumCamRecording',
	'playErSetRateRecording',
	'getEventTimeRecording',
	'saveRecordingExport',
	'loadRecordingExport',
	'camEnumRecordingExport',
	'checkAvailableExportRecordingExport',
	'getEvtExpInfoRecordingExport',
	'camEvtRotCtrlRecordingExport',
	'dumpEvtExpDbRecordingExport',
	'checkNameRecordingExport',
	'deleteRecordingExport',
	'loadRecordingMount',
	'deleteRecordingMount',
	'enableRecordingMount',
	'disableRecordingMount',
	'saveRecordingMountWizard',
	'bAckUpEnumRecordingMountWizard',
	'startRecordingReindex',
	'stopRecordingReindex',
	'camModelCapPreload',
	'preload',
	'gblStorePreload',
	'initDataPreload',
	'enumEventPlayer',
	'searchAvailDatePlayer',
	'playMjpegEventPlayer',
	'playMjpegEventNoFrameIdPlayer',
	'loadCamEraPlayer',
	'playerLiveviewSrc',
	'listPersonalSettingsImages',
	'getPersonalSettingsImage',
	'uploadPersonalSettingsImage',
	'getWallpaperPersonalSettingsImage',
	'loadPersonalSettingsImage',
	'savePersonalSettingsImage',
	'resetPersonalSettingsImage',
	'clearAllPersonalSettingsImage',
	'loadPersonalSettingsPhoto',
	'loadBase64PersonalSettingsPhoto',
	'uploadPersonalSettingsPhoto',
	'movePtz',
	'zoomPtz',
	'focusPtz',
	'irisPtz',
	'autoFocusPtz',
	'absPtz',
	'listPresetPtz',
	'goPresetPtz',
	'listPatrolPtz',
	'runPatrolPtz',
	'homePtz',
	'autoPanPtz',
	'objTrAckIngPtz',
	'enumPtzPatrol',
	'enumPartialPtzPatrol',
	'loadPtzPatrol',
	'savePtzPatrol',
	'deletePtzPatrol',
	'executePtzPatrol',
	'stopPtzPatrol',
	'enumPtzPreset',
	'getInfoPtzPreset',
	'setPresetPtzPreset',
	'delPresetPtzPreset',
	'executePtzPreset',
	'setHomePtzPreset',
	'getDelProgressPtzPreset',
	'delProgressDonePtzPreset',
	'getRegisterTokenNotification',
	'getCustomizedMessageNotification',
	'setCustomizedMessageNotification',
	'setAdvSettingNotification',
	'getAdvSetTingNotification',
	'getSetTingNotificationEmail',
	'setSettingNotificationEmail',
	'sendTestMailNotificationEmail',
	'getNotificationFilter',
	'setNotificationFilter',
	'getSetTingNotificationPushService',
	'setSettingNotificationPushService',
	'sendTestMessageNotificationPushService',
	'sendVerificationMailNotificationPushService',
	'listMobileDeviceNotificationPushServices',
	'unpairMobileDeviceNotificationPushService',
	'getSetTingNotificationSms',
	'setSettingNotificationSms',
	'sendTestMessageNotificationSms',
	'updateShmConfNotificationSms',
	'listNotificationSmsServiceProviders',
	'deleteNotificationSmsServiceProvider',
	'createNotificationSmsServiceProvider',
	'setNotificationSmsServiceProvider',
	'getSysteMdEpendentScheduleNotificationSchedule',
	'getCamEraScheduleNotificationSchedule',
	'getCamEraDiScheduleNotificationSchedule',
	'getCamEraNotifyScheduleByIdxNotificationSchedule',
	'getAccessControlDoorScheduleNotificationSchedule',
	'getAccessControlControllerScheduleNotificationSchedule',
	'getIoModuleScheduleNotificationSchedule',
	'getIoModuleDiScheduleNotificationSchedule',
	'setSysteMdEpendentScheduleNotificationSchedule',
	'setCamEraScheduleNotificationSchedule',
	'setIoModuleScheduleNotificationSchedule',
	'setAccessControlScheduleNotificationSchedule',
	'setBatChScheduleNotificationSchedule',
	'listLogs',
	'countByCategoryLog',
	'clearLog',
	'addSlaveDsLog',
	'addFromPluginLog',
	'downloadLog',
	'getSetTingLog',
	'setSettingLog',
	'batSetSettingLog',
	'batSetDoneLog',
	'getBatProgressLog',
	'vsLog',
	'getArchiveSetTingLog',
	'setArchiveSettingLog',
	'checkValidLog',
	'getUidLocalDisplay',
	'loadLicense',
	'checkQuotaLicense',
	'addKeyLicense',
	'verifyKeyLicense',
	'deleteKeyLicense',
	'verifyPasswordLicense',
	'listLayouts',
	'camLoadLayout',
	'saveLayout',
	'checkValidLayout',
	'fisheyeRegionLoadLayout',
	'camEnumAllLayout',
	'itemEnumLayout',
	'loadLayout',
	'loAdDEfaultLayout',
	'deleteLayout',
	'ioModuleLoadLayout',
	'saveJoystickSetting',
	'getJoystickSetting',
	'exportJoystickSetting',
	'importJoystickSetting',
	'archiveEnumJoystickSetting',
	'getInfo',
	'getUidInfo',
	'enumIoModule',
	'enumPortIoModule',
	'enumVendorModelIoModule',
	'saveIoModule',
	'deleteIoModule',
	'enableIoModule',
	'disableIoModule',
	'testConnIoModule',
	'getCapIoModule',
	'portSetTingIoModule',
	'pollIngDiioModule',
	'pollIngDoioModule',
	'getDevNumOfDsIoModule',
	'countByCategoryIoModule',
	'startIoModuleSearch',
	'infoGetIoModuleSearch',
	'getTreeListHelp',
	'getSearchResultHelp',
	'searchGlobal',
	'loadFisheye',
	'saveFisheye',
	'deleteFisheye',
	'recordExternaling',
	'triggerExternalEvent',
	'listExternalDeviceStorageUsb',
	'ejectExternalDeviceStorageUsb',
	'queryEvent',
	'deleteMultiEvent',
	'deleteFilterEvent',
	'deleteAllEvent',
	'listEvents',
	'countByCategoryEvent',
	'lockEvent',
	'unLockEvent',
	'lockFilterEvent',
	'unLockFilterEvent',
	'tRunCEvent',
	'keepAliveEvent',
	'downloadEvent',
	'saveMigrateEvent',
	'delMigratedEvent',
	'checkValidEvent',
	'loadAdvancedEvent',
	'applyAdvancedEvent',
	'updateIndexEvent',
	'saveEventExport',
	'loadEventExport',
	'camEnumEventExport',
	'checkAvailableExportEventExport',
	'getEvtExpInfoEventExport',
	'camEvtRotCtrlEventExport',
	'dumpEvtExpDbEventExport',
	'checkNameEventExport',
	'deleteEventExport',
	'loadEventMount',
	'deleteEventMount',
	'enableEventMount',
	'disableEventMount',
	'saveEventMountWizard',
	'bAckUpEnumEventMountWizard',
	'listEmaps',
	'loadEmap',
	'saveEmap',
	'deleteEmap',
	'checkValidEmap',
	'uploadEmapImage',
	'loadEmapImage',
	'enumDigitalOutput',
	'pollStateDigitalOutput',
	'saveDigitalOutput',
	'saveMultiDigitalOutput',
	'camEraModelEnumCameraCap',
	'camCapCameraCap',
	'camEraTestCameraCap',
	'getSnapshotCameraCap',
	'camCapRemoteCameraCap',
	'camCapUserDefineResoCameraCap',
	'camBatAddVerifyCameraCap',
	'enumExistedCamCapCameraCap',
	'listCameras',
	'getStmKeyCamera',
	'getStmUrlPathCamera',
	'getSnapshotCamera',
	'enableCamera',
	'disableCamera',
	'listGroupCameras',
	'getCapabilityCamera',
	'getCapabilityByCamIdCamera',
	'getInfoCamera',
	'startLiveCamera',
	'countByCategoryCamera',
	'getOccupiedSizeCamera',
	'deleteCamera',
	'migrateCamera',
	'migrationGetDataCamera',
	'migrationGetStatusCamera',
	'migrationSrcCamera',
	'migrationDstCamera',
	'migrationCamRelTableCamera',
	'migrationEnumCamera',
	'migrationCancelCamera',
	'saveOptimizeParamCamera',
	'saveLiveViewParamCamera',
	'reCountEventSizeCamera',
	'checkCamValidCamera',
	'forceReStartCamCamera',
	'forceSyncTimeCamera',
	'detectValueCamera',
	'setParameterCamera',
	'setPtzParameterCamera',
	'enumFilterDataCamera',
	'diEnumCameraEvent',
	'diStsPollIngCameraEvent',
	'diParamSaveCameraEvent',
	'motionEnumCameraEvent',
	'mdParamLoadCameraEvent',
	'mdParamSaveCameraEvent',
	'appParamSaveCameraEvent',
	'appLiveViewParamSaveCameraEvent',
	'audioEnumCameraEvent',
	'adParamSaveCameraEvent',
	'tamperingEnumCameraEvent',
	'tdParamSaveCameraEvent',
	'pirEnumCameraEvent',
	'pdParamSaveCameraEvent',
	'roiListPollCameraEvent',
	'roiListSaveCameraEvent',
	'roiAddCameraEvent',
	'roiDelCameraEvent',
	'getApplicationInfoCameraEvent',
	'appEnumCameraEvent',
	'saveCameraExport',
	'checkNameCameraExport',
	'getCamRelatedDataCameraExport',
	'enumCameraGroup',
	'deleteCameraGroup',
	'saveCameraGroup',
	'saveCameraImport',
	'loAdDAtaCameraImport',
	'archiveEnumCameraImport',
	'archiveCamEnumCameraImport',
	'startCameraSearch',
	'getInfoCameraSearch',
	'oneTimeCameraStatus',
	'cycleCameraStatus',
	'camVolEvalCameraVolEval',
	'camSaveAllCameraWizard',
	'camBatAddSaveAllCameraWizard',
	'compareCheckSumByModelCameraWizard',
	'camBatAddCheckCameraWizard',
	'camBatAddCheckRemoteCameraWizard',
	'checkQuotaCameraWizard',
	'checkSdCardSizeCameraWizard',
	'formatSdCardCameraWizard',
	'quickCreateCameraWizard',
	'applyDupCamCameraWizard',
	'getBatSaveProgressCameraWizard',
	'batAddProgressDoneCameraWizard',
	'enumVendorModelCameraWizard',
	'camBatEditCamListCameraWizard',
	'camBatEditCheckCamConfCameraWizard',
	'camBatEditSaveAllCameraWizard',
	'camBatEditCopyApplyCameraWizard',
	'getInfoCms',
	'applyOptionCms',
	'lockSelfCms',
	'getMdSnapshotCms',
	'modifySharePrivCms',
	'notifyBreakCms',
	'batCheckSambaServiceCms',
	'checkSambaEnableDcms',
	'enableSambaCms',
	'redirectCms',
	'redirectUploadCms',
	'getStatusCms',
	'volumeRemoveCms',
	'ntpSyncCms',
	'startCmsDsSearch',
	'getInfoCmsDsSearch',
	'loadSetTingCmsFailover',
	'saveSetTingCmsFailover',
	'applyServSetTingCmsFailover',
	'reSetServSettingCmsFailover',
	'manualFailoverCmsFailover',
	'manualRestoreCmsFailover',
	'hibernateCmsFailover',
	'stopRecoveringCmsFailover',
	'replaceServerCmsFailover',
	'updateCentralInfoCmsFailover',
	'cancelFailoverCmsFailover',
	'notifyPushServSetTingCmsFailover',
	'redirectTestConnectCmsFailover',
	'logInCmsGetDsStatus',
	'logOutCmsGetDsStatus',
	'lockCmsGetDsStatus',
	'pairCmsGetDsStatus',
	'unPairCmsGetDsStatus',
	'testCmsGetDsStatus',
	'testHostDsCmsGetDsStatus',
	'enableCmscmsGetDsStatus',
	'getFreeSpaceCmsGetDsStatus',
	'multipartStatusConnCmsGetDsStatus',
	'loadCmsSlavedsList',
	'authCmsSlavedsList',
	'deleteCmsSlavedsList',
	'enableCmsSlavedsList',
	'disableCmsSlavedsList',
	'lockCmsSlavedsList',
	'unlockCmsSlavedsList',
	'lockAllCmsSlavedsList',
	'unlockAllCmsSlavedsList',
	'checkCmscmsSlavedsList',
	'saveCmsSlavedsWizard',
	'testCmsSlavedsWizard',
	'enableCmsSlavedsWizard',
	'loadCmsSlavedsWizard',
	'batChSaveCmsSlavedsWizard',
	'batChVerifyCmsSlavedsWizard',
	'blockCardHolderAxisAcsCtrler',
	'countByCategoryAxisAcsCtrler',
	'countByCategoryCardHolderAxisAcsCtrler',
	'countByCategoryLogAxisAcsCtrler',
	'deleteAxisAcsCtrler',
	'doorControlAxisAcsCtrler',
	'enableCtrlerAxisAcsCtrler',
	'enumAxisAcsCtrler',
	'enumCardHolderAxisAcsCtrler',
	'enumLogConfigAxisAcsCtrler',
	'getDoorDataAxisAcsCtrler',
	'getUpdateInfoAxisAcsCtrler',
	'listDoorAxisAcsCtrlers',
	'listLogAxisAcsCtrlers',
	'listPrivilegeAxisAcsCtrlers',
	'retrieveAxisAcsCtrler',
	'monitorAxisAcsCtrler',
	'saveAxisAcsCtrler',
	'saveCardHolderAxisAcsCtrler',
	'addCardHolderAxisAcsCtrler',
	'delCardHolderAxisAcsCtrler',
	'savePrivilegeAxisAcsCtrler',
	'saveLogConfigAxisAcsCtrler',
	'testConnectAxisAcsCtrler',
	'getStandAloneModeAxisAcsCtrler',
	'retrieveLastCardAxisAcsCtrler',
	'clearLogAxisAcsCtrler',
	'downloadLogAxisAcsCtrler',
	'ackAlarmAxisAcsCtrler',
	'getCardHolderPhotoAxisAcsCtrler',
	'enumAccessRuleAxisAcsCtrler',
	'addAccessRuleAxisAcsCtrler',
	'saveAccessRuleAxisAcsCtrler',
	'delAccessRuleAxisAcsCtrler',
	'startAxisAcsCtrlerSearch',
	'infoGetAxisAcsCtrlerSearch',
	'listAudioPatterns',
	'setAudioPattern',
	'deleteAudioPattern',
	'uploadAudioPattern',
	'cancelAudioPattern',
	'loadFileAudioPattern',
	'setUpRecChannelAudioPattern',
	'playPatternAudioPattern',
	'sendDataAudioOut',
	'liveStartAudioOut',
	'stopAudioOut',
	'fileStartAudioOut',
	'setUpChannelAudioOut',
	'addCamAudioOut',
	'removeCamAudioOut',
	'enumSetTingAudioOut',
	'saveSetTingAudioOut',
	'checkOccupiedAudioOut',
	'syncFilesArchiving',
	'createDirsArchiving',
	'moveDirArchiving',
	'saveAnalyticsSetting',
	'enumAlert',
	'recServerEnumAlert',
	'lockAlert',
	'unlockAlert',
	'clearAlert',
	'clearSelectedAlert',
	'recServerClearAlert',
	'triggerAlert',
	'eventFlushHeaderAlert',
	'eventCountAlert',
	'recServerEventCountAlert',
	'markAsViewEdAlert',
	'saveCamSetTingAlertSetting',
	'getCamSetTingAlertSetting',
	'getAdvSetTingAlertSetting',
	'setAdvSettingAlertSetting',
	'getUpdateInfoAddOns',
	'saveActionRule',
	'listActionRules',
	'enableActionRule',
	'disableActionRule',
	'listHistoryActionRules',
	'deleteHistoryActionRule',
	'sendSsdCmdActionRule',
	'sendActruledCmdActionRule',
	'downloadHistoryActionRule',
	'loadAdvancedActionRule',
	'saveAdvancedActionRule',
	'sendData2PlayErActionRule',
	'sendData2VsActionRule'
];

var ssReferences = {
	'Unknown': {}
};

unknownCalls.forEach(function(c) {
	ssReferences['Unknown'][c] = {'help': unknowHelp, 'payload': {}}
})

module.exports = ssReferences;