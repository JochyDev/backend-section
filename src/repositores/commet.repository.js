const BaseRepository = require("./base.repository");
let _commet = null;


class CommetRepository extends BaseRepository {
    constructor({ Commet }){
        super(Commet);
        _commet = Commet;
    }
}


module.exports = CommetRepository;