exports.locationdetail = function(req, res) {
    Location.findById(req.params.id, function(err, result) {

        Package.find(function (err, results) {
            
            res.render('location-detail', { title: 'Location Details', location: result, packages: results });

        });
    });
};