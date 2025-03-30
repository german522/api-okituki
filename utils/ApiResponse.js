class ApiResponse {
    static send(success, message, data, res) {
        return res.json({
            success,
            message,
            data
        });
    }
}

module.exports = ApiResponse;
