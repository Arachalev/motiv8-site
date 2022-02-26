import classes from "./Pricing.module.css";
import PricingSingle from "./PricingSingle";

const Pricing = () => {
  return (
    <div className={classes.container}>
        <div className={classes.pricing}>
            <p>Pricing</p>
            <h4>Choose the right plan for your business</h4>
        </div>
        <div className={classes.singlePrice}>
        <PricingSingle
        title={`Basic`}
        price={`$200`}
        time={`per month`}
        perks1={`Unlimited updates & projects`}
        perks2={`Custom Permissions`}
        perks3={`Custom Infrastructure`}
        perks4={`save 40%`}
      />
       <PricingSingle
        title={`Basic`}
        price={`$200`}
        time={`per month`}
        perks1={`Unlimited updates & projects`}
        perks2={`Custom Permissions`}
        perks3={`Custom Infrastructure`}
        perks4={`save 40%`}
      />
       <PricingSingle
        title={`Basic`}
        price={`$200`}
        time={`per month`}
        perks1={`Unlimited updates & projects`}
        perks2={`Custom Permissions`}
        perks3={`Custom Infrastructure`}
        perks4={`save 40%`}
      />

        </div>
      
    </div>
  );
};

export default Pricing;
