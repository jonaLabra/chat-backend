const { Schema, model } = require('mongoose');


const mensjaeSchema = Schema({
    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    para : {
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

mensjaeSchema.method('toJSON', function() {
    const  { __v,_id, ...object } = this.toObject();
        return object;
});


module.exports = model('Mensaje', mensjaeSchema);