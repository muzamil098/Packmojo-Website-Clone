import React from "react";
import CustomPButton from "./Custom Packagin UI/CustomPButton";
import CustomPCard from "./Custom Packagin UI/CustomPCard";

const packagingStyle = [
  {
    logo: 1,
    title: "Mailer Boxes MOQ from 30 units",
    description:
      "Corrugated mailer boxes are perfect for eCommerce packaging and shipping, giving your customers an exciting unboxing experience from the get-go.",
    button: "Explore Mailers",
  },
  {
    logo: 2,
    title: "Folding Cartons MOQ from 30 units",
    description:
      "Custom printed folding carton boxes, also known as product boxes, are perfect for individual product packaging and lightweight items.",
    button: "Explore Folding Cartoons",
  },
  {
    logo: 3,
    title: "Rigid Boxes MOQ from 300 units",
    description:
      "Custom printed rigid boxes, also known as gift boxes, are perfect for high end or luxury products to create a premium unboxing experience.",
    button: "Explore Rigid Boxes",
  },
  {
    logo: 4,
    title: "Magnetic Rigid Boxes MOQ from 300 units",
    description:
      "The ultimate package for luxury. Use custom magnetic closure boxes to elevate the value of your products and provide a premium brand experience.",
    button: "Explore Magnetic Boxes",
  },
  {
    logo: 5,
    title: "Box Inserts MOQ from 300 units",
    description:
      "Present products beautifully in custom box inserts that are moulded to the shape of your products for a secure and snug fit.",
    button: "Explore Inserts",
  },
  {
    logo: 6,
    title: "Box Dividers MOQ from 300 units",
    description:
      "Use box dividers or partitions to easily organize and pack products inside your box. Create multiple compartments to separate different sized products from one another.",
    button: "Explore Dividers",
  },
  {
    logo: 7,
    title: "Display Boxes MOQ from 300 units",
    description:
      "Convert your custom boxes into counter display packaging that showcases your products. Perfect as retail display boxes in-store or displayed at events.",
    button: "Explore Display Boxes",
  },
  {
    logo: 8,
    title: "Tray and Sleeve Boxes MOQ from 300 units",
    description:
      "Custom foldable tray and sleeve boxes give your customers a fun 'slide to reveal' unboxing experience. Perfect for lightweight items or high-end products.",
    button: "Explore Tray and Sleeve",
  },
  {
    logo: 9,
    title: "Foldable Lid & Base Boxes MOQ from 300 units",
    description:
      "Also known as foldable two piece product boxes, the lid and base can be folded together to form a sturdy box structure. Thinner than rigid boxes, but shipped flat so that you save on shipping costs.",
    button: "Explore Foldable Boxes",
  },
  {
    logo: 10,
    title: "Packaging Sleeves MOQ from 500 units",
    description:
      "Custom packaging sleeves are a great branded enhancement that slides over your boxes, or used individually as product packaging and branding small items.",
    button: "Explore Sleeves",
  },
  {
    logo: 11,
    title: "Stickers & Labels MOQ from 500 units",
    description:
      "Use custom printed stickers and labels as an enhancement to your boxes, as another way of branding products, or to seal your boxes during shipping.",
    button: "Explore Stickers",
  },
  {
    logo: 12,
    title: "Paper Bags MOQ from 500 units",
    description:
      "Custom printed paper bags allow your brand to be recognized anywhere and everywhere. Fully customizable and perfect for use at events, restaurants, or retail stores.",
    button: "Explore Bags",
  },
  {
    logo: 13,
    title: "Cardboard Tubes MOQ from 2000 units",
    description:
      "Made with sturdy cardboard and are ideal for storing small or fragile items such as glass bottles.",
    button: "Explore Tubes",
  },
  {
    logo: 14,
    title: "Pillow Boxes MOQ from 300 units",
    description:
      "Custom pillow boxes are ideal for packaging lightweight items such as beauty products, accessories, and jewelry. They are shipped flat and quickly popped into place for easy packing.",
    button: "Customize Now",
  },
  {
    logo: 15,
    title: "Cake Boxes MOQ from 300 units",
    description:
      "Custom cake boxes are lightweight and can be easily folded together to package cakes, pastries, and other bakery goods. Best for food that's fully wrapped or has a lining to keep from direct contact with the box.",
    button: "Customize Now",
  },
  {
    logo: 16,
    title: "Hang Tags MOQ from 500 units",
    description:
      "Attach custom printed hang tags to your products such as apparel, gifts, and more. Fully customizable with print and can be in any shape and size.",
    button: "Customize Now",
  },
  {
    logo: 17,
    title: "Tissue Paper MOQ from 5000 units",
    description:
      "Custom tissue paper is the perfect way to wrap your products inside your packaging, and can also be used as void fillers to fill the empty space inside your boxes.",
    button: "Customize Now",
  },
];

const ChooosePackagingStyle = () => {
  const pkgStyles = packagingStyle.map((pkg) => (
    <CustomPCard
      key={Math.random()}
      logo={[pkg.logo]}
      title={pkg.title}
      description={pkg.description}
      button={pkg.button}
    />
  ));
  return (
    <>
      <section className="py-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <h1>Choose your packaging style</h1>
                <p>
                  Not sure which type of packaging to choose? View the Packaging
                  Cost Estimator to get a rough idea on how much it would cost.
                </p>
              </div>
              {pkgStyles}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooosePackagingStyle;
