// Date Process for FCC's Timestamp Microservice API Challenge (BackEndDev Cert)

const req = require("express/lib/request");

// by Dave Starmer
function myDateProcessor(req,res) {
    const rD = req.params.date;
    const d = (rD == undefined) ? new Date() : new Date(rD);
    if (isNaN(d.getTime()) && rD.length > 0 && rD.length==String(parseInt(rD)).length){
        d.setTime(parseInt(rD)); 
    }
    if (!isNaN(d.getTime())) {
        res.json({ "unix": d.getTime(),"utc":d.toUTCString() })
    }
    else {
        res.json({ error : "Invalid Date", rcd: req.params.date })
    }
}


module.exports = myDateProcessor;