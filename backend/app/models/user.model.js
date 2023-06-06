module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            username: String,
            email: String,
            password: String,
            roles: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Role"
                }
            ]
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, password, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("user", schema);
    return User;
}
