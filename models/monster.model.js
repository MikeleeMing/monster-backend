import mongoose from "mongoose";

const  IdCounterSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true},
        sequence: { type: Number}
    }
);

const GeoSchema = new mongoose.Schema(
    {
      lat: { type: Number },
      lng: { type: Number },
    }
  );

const AddressSchema = new mongoose.Schema(
    {
      street: { type: String },
      suite: { type: String },
      city: { type: String },
      zipcode: { type: String },
      geo: { type: GeoSchema }
    }
  );
  

  
  const CompanySchema = new mongoose.Schema(
    {
      name: { type: String },
      catchPhrase: { type: String },
      bs: { type: String }
    }
  );

const MonsterSchema = new mongoose.Schema(
  {
    id: {type: Number, required: true},
    name: { type: String, required: true },
    username: {type: String, required: true},
    email: {type: String},
    address: { type: AddressSchema },
    phone: { type: String },
    website: { type: String },
    company: { type: CompanySchema },
    image_url: { type: String, required: true },
  },
  { timestamps: true, strictQuery: true }
);

const Monster = mongoose.model("Monster", MonsterSchema);
const IdCounter = mongoose.model("IdCounter", IdCounterSchema);
export { Monster, IdCounter };

