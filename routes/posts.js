var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require('express');
var router = express.Router();
var PostUsers = require('../models/PostUsers');
var PostMessages = require('../models/PostMessages');
var bodyParser = require('body-parser');
var fs = require("fs");
var path = require('path');
var cors = require('cors');
var mongoose = require('mongoose');
// THIS WONT WORK IF YOU VPN IS ON
// Make sure the link is correct
router.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var posts, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, PostMessages.find().limit()];
            case 1:
                posts = _a.sent();
                res.json(posts[0]);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.json({ message: err_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/getwithfilter', cors("http://192.168.0.16:3000"), function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var filterReceiver, filterSender, posts, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Get with filter");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                console.log(req.body.filter);
                filterReceiver = req.body.filter.receiver;
                filterSender = req.body.filter.sender;
                console.log("Trying to get");
                return [4 /*yield*/, PostMessages.find({
                        $or: [
                            {
                                sender: filterSender,
                                receiver: filterReceiver
                            },
                            {
                                sender: filterReceiver,
                                receiver: filterSender
                            }
                        ]
                    }).limit(20)];
            case 2:
                posts = _a.sent();
                console.log(posts);
                console.log("Got it");
                res.json(posts);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.json({ message: err_2 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get('/getall', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var params, filterReceiver, posts, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                params = new URLSearchParams("localhost:5000/?id=2");
                filterReceiver = params.get('filterReceiver');
                console.log(filterReceiver);
                console.log("Trying to get");
                return [4 /*yield*/, PostMessages.find({ sender: "jonny" }).limit(20)];
            case 1:
                posts = _a.sent();
                console.log("Got it");
                res.json(posts);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.json({ message: err_3 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Dont forget sending something back
router.post('/', cors("http://192.168.0.16:3000"), function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var post, savedPost, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(typeof req.body);
                console.log(req.body);
                post = new PostMessages({
                    sender: req.body.sender,
                    receiver: req.body.receiver,
                    textContent: req.body.textContent
                });
                console.log("New");
                console.log(post);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, post.save()];
            case 2:
                savedPost = _a.sent();
                res.json(savedPost);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                res.json(err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post('/getfriends', cors(), function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var posts, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log("Trying to get");
                return [4 /*yield*/, PostUsers.findOne({ name: req.body.name })];
            case 1:
                posts = _a.sent();
                console.log("Got it");
                res.json(posts);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.json({ message: err_5 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/addfriend', cors("http://192.168.0.16:5000"), function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var currentData, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, PostUsers.findOne({ name: req.body.user })];
            case 1:
                currentData = _a.sent();
                console.log("this is the type of the current data !!!");
                // TODO: this doesnt auto generate or something
                console.log(currentData);
                currentData.friends.push(req.body.newFriend);
                console.log(currentData);
                return [4 /*yield*/, currentData.save()];
            case 2:
                _a.sent();
                res.sendStatus(200);
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                console.log(err_6);
                res.json(err_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post('/adduser', cors("http://192.168.0.16:5000"), function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var post, savedPost, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log("Creating new user");
                console.log(req.body.name);
                post = new PostUsers({
                    name: req.body.name,
                    friends: []
                });
                return [4 /*yield*/, post.save()];
            case 1:
                savedPost = _a.sent();
                res.json(savedPost);
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                console.log(err_7);
                res.json(err_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
