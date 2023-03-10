const appPage = {
	id: {
		title: 'Notefy',
		nav: {
			home: 'Beranda',
			archives: 'Arsip'
		},
		msg: {
			confirm: 'Apakah anda yakin?',
			loading: 'Sedang memuat data...',
			error: 'Mohon maaf, ada kesalahan teknis di sisi kami. Silakan coba lagi nanti.'
		},
		add: 'Tambah',
		cancel: 'Batal',
		delete: 'Hapus',
		archive: 'Arsipkan',
		active: 'Aktifkan',
		back: 'Kembali',
		pageNotFound: 'Halaman Tidak Ditemukan.'
	},
	en: {
		title: 'Notefy',
		nav: {
			home: 'Home',
			archives: 'Archives'
		},
		msg: {
			confirm: 'Are you sure?',
			loading: 'Loading...',
			error: 'Error on our side. Please, try again later.'
		},
		add: 'Add',
		cancel: 'Cancel',
		delete: 'Delete',
		archive: 'Archive',
		active: 'Active',
		back: 'Back',
		pageNotFound: '404 Page Not Found'
	}
};

const loginPage = {
	id: {
		header: 'Silakan login untuk menggunakan aplikasi.',
		footer: 'Belum punya akun?',
		footerRegisterLink: 'Daftar di sini'
	},
	en: {
		header: 'Please login to use the app',
		footer: 'Don\'t have an account?',
		footerRegisterLink: 'Register here'
	}
};

const registerPage = {
	id: {
		header: 'Isi form untuk mendaftar akun.',
		footer: 'Sudah punya akun?',
		footerLoginLink: 'Login disini',
		msg: {
			registerSuccess: 'Akun berhasil dibuat. Silahkan login.'
		}
	},
	en: {
		header: 'Fill the form to register account.',
		footer: 'Already have an account?',
		footerLoginLink: 'Login here',
		msg: {
			registerSuccess: 'User created successfully.'
		}
	}
};

const notePage = {
	id: {
		header: 'Catatan Aktif',
		searchPlaceholder: 'Cari berdasarkan judul ...',
		empty: 'Tidak ada catatan.'
	},
	en: {
		header: 'Active Notes',
		searchPlaceholder: 'Search by title ...',
		empty: 'Empty notes list, please make one.'
	}
};

const notesNewPage = {
	id: {
		titlePlaceholder: 'Judul Catatan',
		bodyPlaceholder: 'Tulis catatan Anda di sini...',
		msgSuccess: 'Berhasil menambahkan catatan!'
	},
	en: {
		titlePlaceholder: 'Note Title',
		bodyPlaceholder: 'Write your note here...',
		msgSuccess: 'Successfully add notes!'
	}
};

const notesIdPage = {
	id: {
		notFound: 'Catatan tidak ditemukan.'
	},
	en: {
		notFound: 'Not Found.'
	}
};

const archivePage = {
	id: {
		header: 'Catatan Arsip'
	},
	en: {
		header: 'Archived Notes'
	}
};

const content = {
	appPage,
	loginPage,
	registerPage,
	notePage,
	notesNewPage,
	notesIdPage,
	archivePage
};

export {
	appPage,
	loginPage,
	registerPage,
	notePage,
	notesNewPage,
	notesIdPage,
	archivePage
};

export default content;
