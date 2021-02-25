CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config
	config.skin = 'office2013';
	
	config.toolbar_FieldEditor =
		[
			{name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']},
			{name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll']},
			{
				name: 'basicstyles',
				items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
			},
			'/',
			{
				name: 'paragraph',
				items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
					'-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl']
			},
			{name: 'links', items: ['Link', 'Unlink', 'Anchor']},
			{name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak']},
			'/',
			{name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize']},
			{name: 'colors', items: ['TextColor', 'BGColor']}
		];
		
	config.toolbar_Template = config.toolbar_FieldEditor;

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{name: 'clipboard', groups: ['clipboard', 'undo']},
		{name: 'editing', groups: ['find', 'selection', 'spellchecker']},
		{name: 'links'},
		{name: 'insert'},
		{name: 'forms'},
		{name: 'tools'},
		{name: 'document', groups: ['mode', 'document', 'doctools']},
		{name: 'others'},
		'/',
		{name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
		{name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
		{name: 'styles'},
		{name: 'colors'},
		{name: 'about'}
	];
	
	config.toolbar_Mobile = [
		{name: 'basicstyles', items: ['Bold', 'Italic']},
		{name: 'paragraph', items: ['NumberedList', 'BulletedList','-', 'Blockquote']},
		{name: 'styles', items: ['Styles']},
	];
	
	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';
	
	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';
	
	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};