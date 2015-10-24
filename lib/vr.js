var byte4 = { length: 4, reserved: 2 },
	byte2 = { length: 2, reserved: 0 };

module.exports = {
	/// Table 7.1-1. Page 38: --> ftp://medical.nema.org/medical/dicom/2011/11_05pu.pdf
	_4byteVrs: ['SQ', 'UN', 'OW', 'OB', 'OF', 'UT', 'UN'],

	getLength: function (vr) {
		return ~this._4byteVrs.indexOf(vr) ? byte4 : byte2;
	}
};
