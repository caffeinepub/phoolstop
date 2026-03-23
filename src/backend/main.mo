import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Map "mo:core/Map";

actor {
  type BusinessType = {
    #hotel;
    #restaurant;
    #temple;
    #corporate;
    #other : Text;
  };

  public type LeadRequest = {
    businessName : Text;
    businessType : BusinessType;
    city : Text;
    budgetRange : Text;
    message : Text;
    email : ?Text;
    phone : ?Text;
    timestamp : Time.Time;
  };

  module LeadRequest {
    public func compare(r1 : LeadRequest, r2 : LeadRequest) : Order.Order {
      Int.compare(r2.timestamp, r1.timestamp);
    };
  };

  let enquiries = Map.empty<Time.Time, LeadRequest>();

  public shared ({ caller }) func submitEnquiry(lead : LeadRequest) : async () {
    enquiries.add(lead.timestamp, lead);
  };

  public query ({ caller }) func getAllEnquiries() : async [LeadRequest] {
    enquiries.values().toArray().sort();
  };
};
