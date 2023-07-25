"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
const mongoose_listing = require("mongoose"), Schema = mongoose_listing.Schema;
const ListingSchema = new Schema({
    name: String,
    price: Number,
    sqft: Number,
    numBeds: Number,
    numBaths: Number,
    available: Number,
    residents: Number,
    owner: String,
    distance: Number,
    address: String,
    type: String,
    tags: [String],
    note: new Schema({ text: String, owner: String }),
    rooms: [
        new Schema({ type: { type: String,
                enum: ['bedroom', 'bathroom'] },
            name: String,
            description: String
        })
    ],
    preferences: new Schema({ gender: String, age: String, temp: String, cleaning: String }),
    lease: [String],
    roommates: [String],
    features: [String],
    fitness: [String],
    parking: [String],
    interior: [String],
    kitchen: [String],
    services: [String],
    uniqueDetails: [String],
    outdoorSpace: [String],
    livingSpace: [String]
});
exports.Listing = mongoose_listing.model("Listings", ListingSchema);
//# sourceMappingURL=Listing.js.map