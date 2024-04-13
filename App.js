import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  const src =
    "https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg";
  return <img className="logo" src={src}></img>;
};

const NavItems = () => {
  return (
    <div className="navItems">
      <ui>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
        <li>Cart</li>
      </ui>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItems />
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant-logo"
        src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4= "
      />
      <h3>{props.resName}</h3>
      <h4>{props.locality}</h4>
      <h4>{props.areaName}</h4>
      <h4>{props.costForTwo / 2}</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        header: {
          title: "What's on your mind?",
          headerStyling: {
            padding: {
              left: 16,
              top: 16,
              bottom: 4,
            },
          },
        },
        layout: {
          rows: 1,
          columns: 10,
          horizontalScrollEnabled: true,
          itemSpacing: 24,
          widgetPadding: {},
          containerStyle: {
            containerPadding: {
              left: 8,
              top: 8,
              right: 12,
              bottom: 4,
            },
          },
          scrollBar: {},
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#FFFFFF",
              theme: "THEME_TYPE_LIGHT",
            },
            darkMode: {
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        imageGridCards: {
          info: [
            {
              id: "750203",
              imageId:
                "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
              action: {
                link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                text: "Paratha",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for paratha",
                altTextCta: "open",
              },
              entityId: "80476",
              frequencyCapping: {},
            },
            {
              id: "749874",
              imageId:
                "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
              action: {
                link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                text: "Cakes",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for cakes",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
              frequencyCapping: {},
            },
            {
              id: "750239",
              imageId:
                "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
              action: {
                link: "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                text: "Shake",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for shakes",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
              frequencyCapping: {},
            },
            {
              id: "750235",
              imageId:
                "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
              action: {
                link: "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                text: "Sandwich",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for sandwich",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
              frequencyCapping: {},
            },
            {
              id: "749761",
              imageId:
                "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
              action: {
                link: "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                text: "Khichdi",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for khicdhi",
                altTextCta: "open",
              },
              entityId: "80456",
              frequencyCapping: {},
            },
            {
              id: "750231",
              imageId:
                "v1674029857/PC_Creative%20refresh/3D_bau/banners_new/Poha.png",
              action: {
                link: "https://www.swiggy.com/collections/80374?collection_id=80374&tags=layout_CCS_Poha&type=rcv2",
                text: "Poha",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for poha",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80374&tags=layout_CCS_Poha",
              frequencyCapping: {},
            },
            {
              id: "750599",
              imageId:
                "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
              action: {
                link: "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                text: "Coffee",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for coffee",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
              frequencyCapping: {},
            },
            {
              id: "750638",
              imageId:
                "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
              action: {
                link: "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                text: "Juice",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for juice",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
              frequencyCapping: {},
            },
            {
              id: "750605",
              imageId:
                "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
              action: {
                link: "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                text: "Tea",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for tea",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
              frequencyCapping: {},
            },
            {
              id: "750132",
              imageId:
                "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
              action: {
                link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                text: "Dosa",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for dosa",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
              frequencyCapping: {},
            },
            {
              id: "750237",
              imageId:
                "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
              action: {
                link: "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                text: "Poori",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for poori",
                altTextCta: "open",
              },
              entityId: "80378",
              frequencyCapping: {},
            },
            {
              id: "749763",
              imageId:
                "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
              action: {
                link: "https://www.swiggy.com/collections/80459?collection_id=80459&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                text: "Lassi",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for lassi",
                altTextCta: "open",
              },
              entityId: "80459",
              frequencyCapping: {},
            },
            {
              id: "750644",
              imageId:
                "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
              action: {
                link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                text: "Idli",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for idly",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
              frequencyCapping: {},
            },
            {
              id: "750230",
              imageId:
                "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
              action: {
                link: "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                text: "Samosa",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for samosa",
                altTextCta: "open",
              },
              entityId: "80397",
              frequencyCapping: {},
            },
            {
              id: "749789",
              imageId:
                "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png",
              action: {
                link: "https://www.swiggy.com/collections/80468?collection_id=80468&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                text: "Omelette",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for omelette",
                altTextCta: "open",
              },
              entityId: "80468",
              frequencyCapping: {},
            },
            {
              id: "750572",
              imageId:
                "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
              action: {
                link: "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                text: "Pure Veg",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for veg",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
              frequencyCapping: {},
            },
            {
              id: "750198",
              imageId:
                "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Pancake.png",
              action: {
                link: "https://www.swiggy.com/collections/80472?collection_id=80472&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                text: "Pancakes",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for pancake",
                altTextCta: "open",
              },
              entityId: "80472",
              frequencyCapping: {},
            },
            {
              id: "749791",
              imageId:
                "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png",
              action: {
                link: "https://www.swiggy.com/collections/80470?collection_id=80470&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                text: "Pakoda",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for pakoda",
                altTextCta: "open",
              },
              entityId: "80470",
              frequencyCapping: {},
            },
            {
              id: "750103",
              imageId:
                "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Cutlet.png",
              action: {
                link: "https://www.swiggy.com/collections/80419?collection_id=80419&tags=layout_BAU_Contextual%2Ccutlet&type=rcv2",
                text: "Cutlet",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for cutlet",
                altTextCta: "open",
              },
              entityId: "80419",
              frequencyCapping: {},
            },
            {
              id: "750544",
              imageId:
                "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Upma.png",
              action: {
                link: "https://www.swiggy.com/collections/80412?collection_id=80412&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
                text: "Upma",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for upma",
                altTextCta: "open",
              },
              entityId: "80412",
              frequencyCapping: {},
            },
          ],
          style: {
            width: {
              type: "TYPE_RELATIVE",
              value: 0.2941,
              reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
            },
            height: {
              type: "TYPE_RELATIVE",
              value: 1.2444,
              reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
            },
          },
        },
        id: "whats_on_your_mind",
        gridElements: {
          infoWithStyle: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
            info: [
              {
                id: "750203",
                imageId:
                  "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                action: {
                  link: "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                  text: "Paratha",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for paratha",
                  altTextCta: "open",
                },
                entityId: "80476",
                frequencyCapping: {},
              },
              {
                id: "749874",
                imageId:
                  "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                action: {
                  link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                  text: "Cakes",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for cakes",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                frequencyCapping: {},
              },
              {
                id: "750239",
                imageId:
                  "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                action: {
                  link: "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                  text: "Shake",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for shakes",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                frequencyCapping: {},
              },
              {
                id: "750235",
                imageId:
                  "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                action: {
                  link: "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                  text: "Sandwich",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for sandwich",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                frequencyCapping: {},
              },
              {
                id: "749761",
                imageId:
                  "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                action: {
                  link: "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                  text: "Khichdi",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for khicdhi",
                  altTextCta: "open",
                },
                entityId: "80456",
                frequencyCapping: {},
              },
              {
                id: "750231",
                imageId:
                  "v1674029857/PC_Creative%20refresh/3D_bau/banners_new/Poha.png",
                action: {
                  link: "https://www.swiggy.com/collections/80374?collection_id=80374&tags=layout_CCS_Poha&type=rcv2",
                  text: "Poha",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for poha",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80374&tags=layout_CCS_Poha",
                frequencyCapping: {},
              },
              {
                id: "750599",
                imageId:
                  "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
                action: {
                  link: "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                  text: "Coffee",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for coffee",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
                frequencyCapping: {},
              },
              {
                id: "750638",
                imageId:
                  "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
                action: {
                  link: "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                  text: "Juice",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for juice",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
                frequencyCapping: {},
              },
              {
                id: "750605",
                imageId:
                  "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
                action: {
                  link: "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                  text: "Tea",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for tea",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
                frequencyCapping: {},
              },
              {
                id: "750132",
                imageId:
                  "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                action: {
                  link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                  text: "Dosa",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for dosa",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                frequencyCapping: {},
              },
              {
                id: "750237",
                imageId:
                  "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
                action: {
                  link: "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                  text: "Poori",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for poori",
                  altTextCta: "open",
                },
                entityId: "80378",
                frequencyCapping: {},
              },
              {
                id: "749763",
                imageId:
                  "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
                action: {
                  link: "https://www.swiggy.com/collections/80459?collection_id=80459&tags=layout_BAU_Contextual%2Classi&type=rcv2",
                  text: "Lassi",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for lassi",
                  altTextCta: "open",
                },
                entityId: "80459",
                frequencyCapping: {},
              },
              {
                id: "750644",
                imageId:
                  "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                action: {
                  link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                  text: "Idli",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for idly",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                frequencyCapping: {},
              },
              {
                id: "750230",
                imageId:
                  "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                action: {
                  link: "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                  text: "Samosa",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for samosa",
                  altTextCta: "open",
                },
                entityId: "80397",
                frequencyCapping: {},
              },
              {
                id: "749789",
                imageId:
                  "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png",
                action: {
                  link: "https://www.swiggy.com/collections/80468?collection_id=80468&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                  text: "Omelette",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for omelette",
                  altTextCta: "open",
                },
                entityId: "80468",
                frequencyCapping: {},
              },
              {
                id: "750572",
                imageId:
                  "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                action: {
                  link: "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                  text: "Pure Veg",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for veg",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                frequencyCapping: {},
              },
              {
                id: "750198",
                imageId:
                  "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Pancake.png",
                action: {
                  link: "https://www.swiggy.com/collections/80472?collection_id=80472&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                  text: "Pancakes",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for pancake",
                  altTextCta: "open",
                },
                entityId: "80472",
                frequencyCapping: {},
              },
              {
                id: "749791",
                imageId:
                  "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png",
                action: {
                  link: "https://www.swiggy.com/collections/80470?collection_id=80470&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                  text: "Pakoda",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for pakoda",
                  altTextCta: "open",
                },
                entityId: "80470",
                frequencyCapping: {},
              },
              {
                id: "750103",
                imageId:
                  "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Cutlet.png",
                action: {
                  link: "https://www.swiggy.com/collections/80419?collection_id=80419&tags=layout_BAU_Contextual%2Ccutlet&type=rcv2",
                  text: "Cutlet",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for cutlet",
                  altTextCta: "open",
                },
                entityId: "80419",
                frequencyCapping: {},
              },
              {
                id: "750544",
                imageId:
                  "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Upma.png",
                action: {
                  link: "https://www.swiggy.com/collections/80412?collection_id=80412&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
                  text: "Upma",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for upma",
                  altTextCta: "open",
                },
                entityId: "80412",
                frequencyCapping: {},
              },
            ],
            style: {
              width: {
                type: "TYPE_RELATIVE",
                value: 0.2941,
                reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
              },
              height: {
                type: "TYPE_RELATIVE",
                value: 1.2444,
                reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
              },
            },
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        header: {
          title: "Top restaurant chains in Pune",
          action: {},
          headerStyling: {
            padding: {
              left: 16,
              top: 28,
              bottom: 18,
            },
          },
        },
        layout: {
          rows: 1,
          columns: 6,
          horizontalScrollEnabled: true,
          itemSpacing: 32,
          widgetPadding: {},
          containerStyle: {
            containerPadding: {
              left: 16,
              right: 12,
              bottom: 12,
            },
          },
          scrollBar: {
            scrollThumbColor: "#E46D47",
            scrollTrackColor: "#02060C",
            width: 54,
            height: 4,
            scrollStyling: {
              padding: {
                top: 6,
                bottom: 24,
              },
            },
          },
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "top_brands_for_you",
        gridElements: {
          infoWithStyle: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
            restaurants: [
              {
                info: {
                  id: "27249",
                  name: "Baskin Robbins - Ice Cream Desserts",
                  cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
                  locality: "Opposite Copa Cabana Hotel",
                  areaName: "Pimple Nilakh",
                  costForTwo: "₹200 for two",
                  cuisines: ["Ice Cream", "Desserts"],
                  avgRating: 4.5,
                  veg: true,
                  parentId: "5588",
                  avgRatingString: "4.5",
                  totalRatingsString: "1K+",
                  sla: {
                    deliveryTime: 38,
                    lastMileTravel: 7.8,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "7.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-20 00:00:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                        description: "Delivery!",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-opposite-copa-cabana-hotel-pimple-nilakh-pune-27249",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "202642",
                  name: "Irani Cafe",
                  cloudinaryImageId: "tfsksql6wnebha3zcttj",
                  locality: "Laxman Nagar",
                  areaName: "Baner",
                  costForTwo: "₹200 for two",
                  cuisines: [
                    "Bakery",
                    "Snacks",
                    "Fast Food",
                    "Desserts",
                    "Beverages",
                    "Indian",
                    "Street Food",
                  ],
                  avgRating: 4.5,
                  parentId: "4057",
                  avgRatingString: "4.5",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 36,
                    lastMileTravel: 8.7,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "8.7 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-20 00:00:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                        description: "Delivery!",
                      },
                      {
                        imageId: "Rxawards/_CATEGORY-Snacks.png",
                        description: "Delivery!",
                      },
                    ],
                  },
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            },
                          },
                          {
                            attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-Snacks.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/irani-cafe-laxman-nagar-baner-pune-202642",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "253596",
                  name: "Burger King",
                  cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                  locality: "Tathawade",
                  areaName: "Tathawade",
                  costForTwo: "₹350 for two",
                  cuisines: ["Burgers", "American"],
                  avgRating: 4.1,
                  parentId: "166",
                  avgRatingString: "4.1",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 39,
                    lastMileTravel: 4.5,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "4.5 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-13 06:59:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "Rxawards/_CATEGORY-Burger.png",
                        description: "Delivery!",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-Burger.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/burger-king-tathawade-pune-253596",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "16970",
                  name: "Mad Momos",
                  cloudinaryImageId: "qswrojfwttgslmy8n4cn",
                  locality: "Guru Krupa Colony",
                  areaName: "Guru Krupa Colony",
                  costForTwo: "₹200 for two",
                  cuisines: [
                    "Chinese",
                    "Tibetan",
                    "Nepalese",
                    "Pizzas",
                    "Snacks",
                    "Beverages",
                  ],
                  avgRating: 4,
                  parentId: "610",
                  avgRatingString: "4.0",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 47,
                    lastMileTravel: 8.5,
                    serviceability: "SERVICEABLE",
                    slaString: "45-50 mins",
                    lastMileTravelString: "8.5 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-13 23:59:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "₹125 OFF",
                    subHeader: "ABOVE ₹249",
                    discountTag: "FLAT DEAL",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/mad-momos-guru-krupa-colony-pune-16970",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "35790",
                  name: "The Belgian Waffle Co.",
                  cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
                  locality: "Balewadi High Street",
                  areaName: "Balewadi",
                  costForTwo: "₹200 for two",
                  cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
                  avgRating: 4.5,
                  veg: true,
                  parentId: "2233",
                  avgRatingString: "4.5",
                  totalRatingsString: "5K+",
                  sla: {
                    deliveryTime: 44,
                    lastMileTravel: 9.3,
                    serviceability: "SERVICEABLE",
                    slaString: "40-45 mins",
                    lastMileTravelString: "9.3 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-13 06:55:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "Rxawards/_CATEGORY-Desserts.png",
                        description: "Delivery!",
                      },
                      {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-Desserts.png",
                            },
                          },
                          {
                            attributes: {
                              description: "pureveg",
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "20% OFF",
                    subHeader: "UPTO ₹50",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-high-street-balewadi-pune-35790",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "396721",
                  name: "Chai Point",
                  cloudinaryImageId: "f9ekvewefxolboyrurxs",
                  locality: "Rahatani Road",
                  areaName: "Pimple Saudagar",
                  costForTwo: "₹150 for two",
                  cuisines: [
                    "Bakery",
                    "Beverages",
                    "Maharashtrian",
                    "Snacks",
                    "Street Food",
                    "South Indian",
                    "Punjabi",
                    "Chaat",
                    "Indian",
                    "American",
                    "Fast Food",
                    "Desserts",
                    "Cafe",
                    "Healthy Food",
                    "Home Food",
                    "North Indian",
                  ],
                  avgRating: 4.4,
                  parentId: "1607",
                  avgRatingString: "4.4",
                  totalRatingsString: "1K+",
                  sla: {
                    deliveryTime: 45,
                    lastMileTravel: 9.3,
                    serviceability: "SERVICEABLE",
                    slaString: "40-45 mins",
                    lastMileTravelString: "9.3 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-20 00:00:00",
                    opened: true,
                  },
                  badges: {
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "options available",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "₹125 OFF",
                    subHeader: "ABOVE ₹249",
                    discountTag: "FLAT DEAL",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/chai-point-rahatani-road-pimple-saudagar-pune-396721",
                  type: "WEBLINK",
                },
              },
            ],
            theme: "Restaurant_Group_WebView_SEO_PB_Theme",
            widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
            style: {
              width: {
                type: "TYPE_RELATIVE",
                value: 0.41111112,
                reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
              },
              height: {
                type: "TYPE_RELATIVE",
                value: 0.7027027,
                reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
              },
              layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
            },
            collectionId: "84124",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
        title: "Restaurants with online food delivery in Pune",
        id: "popular_restaurants_title",
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance (Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "Delivery Time",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost: Low to High",
          },
          {
            key: "costForTwoDesc",
            title: "Cost: High to Low",
          },
        ],
        restaurantCount: 901,
        facetList: [
          {
            label: "Delivery Time",
            id: "deliveryTime",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Fast Delivery",
                id: "deliveryTimefacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
          },
          {
            label: "Cuisines",
            id: "catalog_cuisines",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "American",
                id: "query_american",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Arabian",
                id: "query_arabian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Asian",
                id: "query_asian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Awadhi",
                id: "query_awadhi",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Bakery",
                id: "query_bakery",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Barbecue",
                id: "query_barbecue",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Bengali",
                id: "query_bengali",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Beverages",
                id: "query_beverages",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Bihari",
                id: "query_bihari",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Biryani",
                id: "query_biryani",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Burger",
                id: "query_burger",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Burgers",
                id: "query_burgers",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Cafe",
                id: "query_cafe",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Cakes and Pastries",
                id: "query_cakes_and_pastries",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Chaat",
                id: "query_chaat",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Chinese",
                id: "query_chinese",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Continental",
                id: "query_continental",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Desserts",
                id: "query_desserts",
                analytics: {},
                openFilter: true,
              },
              {
                label: "European",
                id: "query_european",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Fast Food",
                id: "query_fast_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Grill",
                id: "query_grill",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Healthy Food",
                id: "query_healthy_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Home Food",
                id: "query_home_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Hyderabadi",
                id: "query_hyderabadi",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ice Cream",
                id: "query_ice_cream",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ice Cream Cakes",
                id: "query_ice_cream_cakes",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Indian",
                id: "query_indian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Italian",
                id: "query_italian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Italian-American",
                id: "query_italian-american",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Jain",
                id: "query_jain",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Japanese",
                id: "query_japanese",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Juices",
                id: "query_juices",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Kashmiri",
                id: "query_kashmiri",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Kebabs",
                id: "query_kebabs",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Kerala",
                id: "query_kerala",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Keto",
                id: "query_keto",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Korean",
                id: "query_korean",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Lucknowi",
                id: "query_lucknowi",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Maharashtrian",
                id: "query_maharashtrian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Malwani",
                id: "query_malwani",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Meat",
                id: "query_meat",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Mexican",
                id: "query_mexican",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Momos",
                id: "query_momos",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Mughlai",
                id: "query_mughlai",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Nepalese",
                id: "query_nepalese",
                analytics: {},
                openFilter: true,
              },
              {
                label: "North Eastern",
                id: "query_north_eastern",
                analytics: {},
                openFilter: true,
              },
              {
                label: "North Indian",
                id: "query_north_indian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "North indian",
                id: "query_north_indian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Oriental",
                id: "query_oriental",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Oriya",
                id: "query_oriya",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Paan",
                id: "query_paan",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pan-Asian",
                id: "query_pan-asian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pastas",
                id: "query_pastas",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pizzas",
                id: "query_pizzas",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Punjabi",
                id: "query_punjabi",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Rajasthani",
                id: "query_rajasthani",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Rolls & Wraps",
                id: "query_rolls_&_wraps",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Salads",
                id: "query_salads",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Seafood",
                id: "query_seafood",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Sindhi",
                id: "query_sindhi",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Snacks",
                id: "query_snacks",
                analytics: {},
                openFilter: true,
              },
              {
                label: "South Indian",
                id: "query_south_indian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Steakhouse",
                id: "query_steakhouse",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Street Food",
                id: "query_street_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Sweets",
                id: "query_sweets",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Tandoor",
                id: "query_tandoor",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Thai",
                id: "query_thai",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Thalis",
                id: "query_thalis",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Tibetan",
                id: "query_tibetan",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Vietnamese",
                id: "query_vietnamese",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Waffle",
                id: "query_waffle",
                analytics: {},
                openFilter: true,
              },
              {
                label: "rolls",
                id: "query_rolls",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            canSearch: true,
            subLabel: "Filter by cuisine",
            openFilter: true,
          },
          {
            label: "Explore",
            id: "explore",
            selection: "SELECT_TYPE_MULTISELECT",
            viewType: "VIEW_TYPE_HALF_CARD",
          },
          {
            label: "Ratings",
            id: "rating",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Ratings 4.5+",
                id: "ratingfacetquery3",
                analytics: {},
              },
              {
                label: "Ratings 4.0+",
                id: "ratingfacetquery4",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 3.5+",
                id: "ratingfacetquery5",
                analytics: {},
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
          },
          {
            label: "Veg/Non-Veg",
            id: "isVeg",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "Pure Veg",
                id: "isVegfacetquery2",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Non Veg",
                id: "isVegfacetquery3",
                analytics: {},
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filter by",
          },
          {
            label: "Offers",
            id: "restaurantOfferMultiTd",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "Offers",
                id: "restaurantOfferMultiTdfacetquery3",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Restaurants with",
          },
          {
            label: "Cost for two",
            id: "costForTwo",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Rs. 300-Rs. 600",
                id: "costForTwofacetquery3",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Greater than Rs. 600",
                id: "costForTwofacetquery4",
                analytics: {},
              },
              {
                label: "Less than Rs. 300",
                id: "costForTwofacetquery5",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
          },
        ],
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {
          columns: 4,
        },
        id: "restaurant_grid_listing",
        gridElements: {
          infoWithStyle: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
            restaurants: [
              {
                info: {
                  id: "756772",
                  name: "Rollsking",
                  cloudinaryImageId: "a0ca578f7d39fac9d846ddf65fdc0c5f",
                  locality: "R Mart",
                  areaName: "Hinjewadi",
                  costForTwo: "₹300 for two",
                  cuisines: [
                    "Fast Food",
                    "Rolls & Wraps",
                    "North Indian",
                    "Snacks",
                  ],
                  avgRating: 4.1,
                  parentId: "4697",
                  avgRatingString: "4.1",
                  totalRatingsString: "100+",
                  sla: {
                    deliveryTime: 33,
                    lastMileTravel: 4.6,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "4.6 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-14 05:00:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: "seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a",
                },
                cta: {
                  link: "https://www.swiggy.com/restaurants/rollsking-r-mart-hinjewadi-pune-756772",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                info: {
                  id: "2226",
                  name: "Cafe Coffee Hutt",
                  cloudinaryImageId: "dpbnmkax7e4wqrys0mxx",
                  locality: "Wakad",
                  areaName: "Wakad",
                  costForTwo: "₹250 for two",
                  cuisines: ["North Indian"],
                  avgRating: 4.3,
                  parentId: "52756",
                  avgRatingString: "4.3",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 33,
                    lastMileTravel: 5,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "5.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-20 00:00:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "30% OFF",
                    discountTag: "FLAT DEAL",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: "seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a",
                },
                cta: {
                  link: "https://www.swiggy.com/restaurants/cafe-coffee-hutt-wakad-pune-2226",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                info: {
                  id: "355982",
                  name: "Hyderabadi Biryani Express",
                  cloudinaryImageId: "oz1780upqnfzisd5gi3s",
                  locality: "Yamuna Nagar",
                  areaName: "Wakad",
                  costForTwo: "₹250 for two",
                  cuisines: ["Biryani"],
                  avgRating: 3.7,
                  parentId: "105161",
                  avgRatingString: "3.7",
                  totalRatingsString: "1K+",
                  sla: {
                    deliveryTime: 32,
                    lastMileTravel: 5.5,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "5.5 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-13 23:59:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "₹125 OFF",
                    subHeader: "ABOVE ₹249",
                    discountTag: "FLAT DEAL",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: "seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a",
                },
                cta: {
                  link: "https://www.swiggy.com/restaurants/hyderabadi-biryani-express-yamuna-nagar-wakad-pune-355982",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                info: {
                  id: "644601",
                  name: "Irani Cafe",
                  cloudinaryImageId: "3944d189155e1b98a4f55682004eafb6",
                  locality: "Shankar Kalat Nagar",
                  areaName: "Wakad",
                  costForTwo: "₹200 for two",
                  cuisines: [
                    "Bakery",
                    "Snacks",
                    "Fast Food",
                    "Desserts",
                    "Beverages",
                    "Indian",
                    "Street Food",
                  ],
                  avgRating: 4.4,
                  parentId: "4057",
                  avgRatingString: "4.4",
                  totalRatingsString: "1K+",
                  sla: {
                    deliveryTime: 30,
                    lastMileTravel: 4.7,
                    serviceability: "SERVICEABLE",
                    slaString: "25-30 mins",
                    lastMileTravelString: "4.7 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-20 00:00:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                        description: "Delivery!",
                      },
                      {
                        imageId: "Rxawards/_CATEGORY-Snacks.png",
                        description: "Delivery!",
                      },
                    ],
                  },
                  isOpen: true,
                  aggregatedDiscountInfoV2: {},
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            },
                          },
                          {
                            attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-Snacks.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: "seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a",
                },
                cta: {
                  link: "https://www.swiggy.com/restaurants/irani-cafe-shankar-kalat-nagar-wakad-pune-644601",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                info: {
                  id: "734618",
                  name: "Rolling Fresh",
                  cloudinaryImageId: "a316ff396139c7ee828b8e9f797aabd7",
                  locality: "Hinjewadi Phase 1",
                  areaName: "Hinjewadi",
                  costForTwo: "₹500 for two",
                  cuisines: ["Rolls & Wraps", "North Indian", "Fast Food"],
                  avgRating: 4.4,
                  parentId: "386931",
                  avgRatingString: "4.4",
                  totalRatingsString: "50+",
                  sla: {
                    deliveryTime: 34,
                    lastMileTravel: 4.6,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "4.6 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-14 05:00:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: "seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a",
                },
                cta: {
                  link: "https://www.swiggy.com/restaurants/rolling-fresh-phase-1-hinjewadi-pune-734618",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                info: {
                  id: "67393",
                  name: "Hyderabadi Laziz",
                  cloudinaryImageId: "qehqwipmklezcu5h9qrk",
                  locality: "Yamuna Nagar",
                  areaName: "Wakad",
                  costForTwo: "₹300 for two",
                  cuisines: ["Biryani", "North Indian"],
                  avgRating: 3.5,
                  parentId: "5841",
                  avgRatingString: "3.5",
                  totalRatingsString: "5K+",
                  sla: {
                    deliveryTime: 30,
                    lastMileTravel: 5.5,
                    serviceability: "SERVICEABLE",
                    slaString: "25-30 mins",
                    lastMileTravelString: "5.5 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-13 10:00:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "₹125 OFF",
                    subHeader: "ABOVE ₹249",
                    discountTag: "FLAT DEAL",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: "seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a",
                },
                cta: {
                  link: "https://www.swiggy.com/restaurants/hyderabadi-laziz-yamuna-nagar-wakad-pune-67393",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                info: {
                  id: "720492",
                  name: "The Waffle Co.",
                  cloudinaryImageId: "2d5e5466ab09670ad6fe3bf90ba84b61",
                  locality: "Pristine Square",
                  areaName: "Wakad",
                  costForTwo: "₹250 for two",
                  cuisines: ["Waffle", "Beverages", "Ice Cream", "Snacks"],
                  avgRating: 4.4,
                  veg: true,
                  parentId: "5143",
                  avgRatingString: "4.4",
                  totalRatingsString: "50+",
                  sla: {
                    deliveryTime: 33,
                    lastMileTravel: 5,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "5.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-20 00:00:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "20% OFF",
                    subHeader: "UPTO ₹100",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: "seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a",
                },
                cta: {
                  link: "https://www.swiggy.com/restaurants/the-waffle-co-pristine-square-wakad-pune-720492",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                info: {
                  id: "253596",
                  name: "Burger King",
                  cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                  locality: "Tathawade",
                  areaName: "Tathawade",
                  costForTwo: "₹350 for two",
                  cuisines: ["Burgers", "American"],
                  avgRating: 4.1,
                  parentId: "166",
                  avgRatingString: "4.1",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 39,
                    lastMileTravel: 4.5,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "4.5 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-13 06:59:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "Rxawards/_CATEGORY-Burger.png",
                        description: "Delivery!",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-Burger.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: "seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a",
                },
                cta: {
                  link: "https://www.swiggy.com/restaurants/burger-king-tathawade-pune-253596",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                info: {
                  id: "320633",
                  name: "Greens and Breads",
                  cloudinaryImageId: "sbiexd6qgfeepvkur4oe",
                  locality: "Shivraj Nagar",
                  areaName: "Pimple Saudagar",
                  costForTwo: "₹300 for two",
                  cuisines: [
                    "Healthy Food",
                    "American",
                    "Snacks",
                    "Salads",
                    "Continental",
                    "Grill",
                  ],
                  avgRating: 4.1,
                  parentId: "8894",
                  avgRatingString: "4.1",
                  totalRatingsString: "1K+",
                  sla: {
                    deliveryTime: 47,
                    lastMileTravel: 9.9,
                    serviceability: "SERVICEABLE",
                    slaString: "45-50 mins",
                    lastMileTravelString: "9.9 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2024-04-13 23:59:00",
                    opened: true,
                  },
                  badges: {
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "brand",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "brand",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "₹125 OFF",
                    subHeader: "ABOVE ₹249",
                    discountTag: "FLAT DEAL",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {
                  context: "seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a",
                },
                cta: {
                  link: "https://www.swiggy.com/restaurants/greens-and-breads-shivraj-nagar-pimple-saudagar-pune-320633",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
            ],
            theme: "SeoRestaurantListingGridWidget",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
        message: "Show More",
        id: "show_more_button",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
        title: "Best Places to Eat Across Cities",
        brands: [
          {
            text: "Best Restaurants in Bangalore",
            link: "https://www.swiggy.com/city/bangalore/best-restaurants",
          },
          {
            text: "Best Restaurants in Pune",
            link: "https://www.swiggy.com/city/pune/best-restaurants",
          },
          {
            text: "Best Restaurants in Mumbai",
            link: "https://www.swiggy.com/city/mumbai/best-restaurants",
          },
          {
            text: "Best Restaurants in Delhi",
            link: "https://www.swiggy.com/city/delhi/best-restaurants",
          },
          {
            text: "Best Restaurants in Hyderabad",
            link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
          },
          {
            text: "Best Restaurants in Kolkata",
            link: "https://www.swiggy.com/city/kolkata/best-restaurants",
          },
          {
            text: "Best Restaurants in Chennai",
            link: "https://www.swiggy.com/city/chennai/best-restaurants",
          },
          {
            text: "Best Restaurants in Chandigarh",
            link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
          },
          {
            text: "Best Restaurants in Ahmedabad",
            link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
          },
          {
            text: "Best Restaurants in Jaipur",
            link: "https://www.swiggy.com/city/jaipur/best-restaurants",
          },
          {
            text: "Best Restaurants in Nagpur",
            link: "https://www.swiggy.com/city/nagpur/best-restaurants",
          },
          {
            text: "Best Restaurants in Bhubaneswar",
            link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
          },
          {
            text: "Best Restaurants in Kochi",
            link: "https://www.swiggy.com/city/kochi/best-restaurants",
          },
          {
            text: "Best Restaurants in Surat",
            link: "https://www.swiggy.com/city/surat/best-restaurants",
          },
          {
            text: "Best Restaurants in Dehradun",
            link: "https://www.swiggy.com/city/dehradun/best-restaurants",
          },
          {
            text: "Best Restaurants in Ludhiana",
            link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
          },
          {
            text: "Best Restaurants in Patna",
            link: "https://www.swiggy.com/city/patna/best-restaurants",
          },
          {
            text: "Best Restaurants in Mangaluru",
            link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
          },
          {
            text: "Best Restaurants in Bhopal",
            link: "https://www.swiggy.com/city/bhopal/best-restaurants",
          },
          {
            text: "Best Restaurants in Gurgaon",
            link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
          },
          {
            text: "Best Restaurants in Coimbatore",
            link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
          },
          {
            text: "Best Restaurants in Agra",
            link: "https://www.swiggy.com/city/agra/best-restaurants",
          },
          {
            text: "Best Restaurants in Noida",
            link: "https://www.swiggy.com/city/noida/best-restaurants",
          },
          {
            text: "Best Restaurants in Vijayawada",
            link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
          },
          {
            text: "Best Restaurants in Guwahati",
            link: "https://www.swiggy.com/city/guwahati/best-restaurants",
          },
          {
            text: "Best Restaurants in Mysore",
            link: "https://www.swiggy.com/city/mysore/best-restaurants",
          },
          {
            text: "Best Restaurants in Pondicherry",
            link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
          },
          {
            text: "Best Restaurants in Thiruvananthapuram",
            link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
          },
          {
            text: "Best Restaurants in Ranchi",
            link: "https://www.swiggy.com/city/ranchi/best-restaurants",
          },
          {
            text: "Best Restaurants in Vizag",
            link: "https://www.swiggy.com/city/vizag/best-restaurants",
          },
          {
            text: "Best Restaurants in Udaipur",
            link: "https://www.swiggy.com/city/udaipur/best-restaurants",
          },
          {
            text: "Best Restaurants in Vadodara",
            link: "https://www.swiggy.com/city/vadodara/best-restaurants",
          },
        ],
        id: "restaurant_near_me_links",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
        title: "Best Cuisines Near Me",
        brands: [
          {
            text: "Chinese Restaurant Near Me",
            link: "https://www.swiggy.com/chinese-restaurants-near-me",
          },
          {
            text: "South Indian Restaurant Near Me",
            link: "https://www.swiggy.com/south-indian-restaurants-near-me",
          },
          {
            text: "Indian Restaurant Near Me",
            link: "https://www.swiggy.com/indian-restaurants-near-me",
          },
          {
            text: "Kerala Restaurant Near Me",
            link: "https://www.swiggy.com/kerala-restaurants-near-me",
          },
          {
            text: "Korean Restaurant Near Me",
            link: "https://www.swiggy.com/korean-restaurants-near-me",
          },
          {
            text: "North Indian Restaurant Near Me",
            link: "https://www.swiggy.com/north-indian-restaurants-near-me",
          },
          {
            text: "Seafood Restaurant Near Me",
            link: "https://www.swiggy.com/seafood-restaurants-near-me",
          },
          {
            text: "Bengali Restaurant Near Me",
            link: "https://www.swiggy.com/bengali-restaurants-near-me",
          },
          {
            text: "Punjabi Restaurant Near Me",
            link: "https://www.swiggy.com/punjabi-restaurants-near-me",
          },
          {
            text: "Italian Restaurant Near Me",
            link: "https://www.swiggy.com/italian-restaurants-near-me",
          },
          {
            text: "Andhra Restaurant Near Me",
            link: "https://www.swiggy.com/andhra-restaurants-near-me",
          },
          {
            text: "Biryani Restaurant Near Me",
            link: "https://www.swiggy.com/biryani-restaurants-near-me",
          },
          {
            text: "Japanese Restaurant Near Me",
            link: "https://www.swiggy.com/japanese-restaurants-near-me",
          },
          {
            text: "Arabian Restaurant Near Me",
            link: "https://www.swiggy.com/arabian-restaurants-near-me",
          },
          {
            text: "Fast Food Restaurant Near Me",
            link: "https://www.swiggy.com/fast-food-restaurants-near-me",
          },
          {
            text: "Jain Restaurant Near Me",
            link: "https://www.swiggy.com/jain-restaurants-near-me",
          },
          {
            text: "Gujarati Restaurant Near Me",
            link: "https://www.swiggy.com/gujarati-restaurants-near-me",
          },
          {
            text: "Thai Restaurant Near Me",
            link: "https://www.swiggy.com/thai-restaurants-near-me",
          },
          {
            text: "Pizzas Restaurant Near Me",
            link: "https://www.swiggy.com/pizzas-restaurants-near-me",
          },
          {
            text: "Asian Restaurant Near Me",
            link: "https://www.swiggy.com/asian-restaurants-near-me",
          },
          {
            text: "Cafe Restaurant Near Me",
            link: "https://www.swiggy.com/cafe-restaurants-near-me",
          },
          {
            text: "Continental Restaurant Near Me",
            link: "https://www.swiggy.com/continental-restaurants-near-me",
          },
          {
            text: "Mexican Restaurant Near Me",
            link: "https://www.swiggy.com/mexican-restaurants-near-me",
          },
          {
            text: "Mughlai Restaurant Near Me",
            link: "https://www.swiggy.com/mughlai-restaurants-near-me",
          },
          {
            text: "Sushi Restaurant Near Me",
            link: "https://www.swiggy.com/sushi-restaurants-near-me",
          },
          {
            text: "Mangalorean Restaurant Near Me",
            link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
          },
          {
            text: "Tibetan Restaurant Near Me",
            link: "https://www.swiggy.com/tibetan-restaurants-near-me",
          },
          {
            text: "Barbecue Restaurant Near Me",
            link: "https://www.swiggy.com/barbecue-restaurants-near-me",
          },
          {
            text: "Maharashtrian Restaurant Near Me",
            link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
          },
          {
            text: "Nepalese Restaurant Near Me",
            link: "https://www.swiggy.com/nepalese-restaurants-near-me",
          },
          {
            text: "Rajasthani Restaurant Near Me",
            link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
          },
          {
            text: "Turkish Restaurant Near Me",
            link: "https://www.swiggy.com/turkish-restaurants-near-me",
          },
        ],
        id: "restaurant_near_me_links",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
        title: "Explore Every Restaurants Near Me",
        brands: [
          {
            text: "Explore Restaurants Near Me",
            link: "https://www.swiggy.com/restaurants-near-me",
          },
          {
            text: "Explore Top Rated Restaurants Near Me",
            link: "https://www.swiggy.com/best-restaurants-near-me",
          },
        ],
        id: "restaurant_near_me_links",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
        title: "For better experience,download the Swiggy app now",
        androidAppImage: "portal/m/play_store.png",
        androidAppLink:
          "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
        iosAppImage: "portal/m/app_store.png",
        iosAppLink:
          "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
        id: "app_install_links",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
        cities: [
          {
            text: "Bangalore",
            link: "https://www.swiggy.com/city/bangalore",
          },
          {
            text: "Gurgaon",
            link: "https://www.swiggy.com/city/gurgaon",
          },
          {
            text: "Hyderabad",
            link: "https://www.swiggy.com/city/hyderabad",
          },
          {
            text: "Delhi",
            link: "https://www.swiggy.com/city/delhi",
          },
          {
            text: "Mumbai",
            link: "https://www.swiggy.com/city/mumbai",
          },
          {
            text: "Pune",
            link: "https://www.swiggy.com/city/pune",
          },
          {
            text: "Kolkata",
            link: "https://www.swiggy.com/city/kolkata",
          },
          {
            text: "Chennai",
            link: "https://www.swiggy.com/city/chennai",
          },
          {
            text: "Ahmedabad",
            link: "https://www.swiggy.com/city/ahmedabad",
          },
          {
            text: "Chandigarh",
            link: "https://www.swiggy.com/city/chandigarh",
          },
          {
            text: "Jaipur",
            link: "https://www.swiggy.com/city/jaipur",
          },
          {
            text: "Kochi",
            link: "https://www.swiggy.com/city/kochi",
          },
          {
            text: "Coimbatore",
            link: "https://www.swiggy.com/city/coimbatore",
          },
          {
            text: "Lucknow",
            link: "https://www.swiggy.com/city/lucknow",
          },
          {
            text: "Nagpur",
            link: "https://www.swiggy.com/city/nagpur",
          },
          {
            text: "Vadodara",
            link: "https://www.swiggy.com/city/vadodara",
          },
          {
            text: "Indore",
            link: "https://www.swiggy.com/city/indore",
          },
          {
            text: "Guwahati",
            link: "https://www.swiggy.com/city/guwahati",
          },
          {
            text: "Vizag",
            link: "https://www.swiggy.com/city/vizag",
          },
          {
            text: "Surat",
            link: "https://www.swiggy.com/city/surat",
          },
          {
            text: "Dehradun",
            link: "https://www.swiggy.com/city/dehradun",
          },
          {
            text: "Noida",
            link: "https://www.swiggy.com/city/noida",
          },
          {
            text: "Ludhiana",
            link: "https://www.swiggy.com/city/ludhiana",
          },
          {
            text: "Trichy",
            link: "https://www.swiggy.com/city/trichy",
          },
          {
            text: "Vijayawada",
            link: "https://www.swiggy.com/city/vijayawada",
          },
          {
            text: "Kanpur",
            link: "https://www.swiggy.com/city/kanpur",
          },
          {
            text: "Mysore",
            link: "https://www.swiggy.com/city/mysore",
          },
          {
            text: "Nashik",
            link: "https://www.swiggy.com/city/nashik",
          },
          {
            text: "Udaipur",
            link: "https://www.swiggy.com/city/udaipur",
          },
          {
            text: "Pondicherry",
            link: "https://www.swiggy.com/city/pondicherry",
          },
          {
            text: "Agra",
            link: "https://www.swiggy.com/city/agra",
          },
          {
            text: "Aurangabad",
            link: "https://www.swiggy.com/city/aurangabad",
          },
          {
            text: "Jalandhar",
            link: "https://www.swiggy.com/city/jalandhar",
          },
          {
            text: "Kota",
            link: "https://www.swiggy.com/city/kota",
          },
          {
            text: "Madurai",
            link: "https://www.swiggy.com/city/madurai",
          },
          {
            text: "Allahabad",
            link: "https://www.swiggy.com/city/allahabad",
          },
          {
            text: "Manipal",
            link: "https://www.swiggy.com/city/manipal",
          },
          {
            text: "Amritsar",
            link: "https://www.swiggy.com/city/amritsar",
          },
          {
            text: "Bareilly",
            link: "https://www.swiggy.com/city/bareilly",
          },
          {
            text: "Meerut",
            link: "https://www.swiggy.com/city/meerut",
          },
          {
            text: "Bhopal",
            link: "https://www.swiggy.com/city/bhopal",
          },
          {
            text: "Ooty",
            link: "https://www.swiggy.com/city/ooty",
          },
          {
            text: "Bhubaneswar",
            link: "https://www.swiggy.com/city/bhubaneswar",
          },
          {
            text: "Raipur",
            link: "https://www.swiggy.com/city/raipur",
          },
          {
            text: "Bikaner",
            link: "https://www.swiggy.com/city/bikaner",
          },
          {
            text: "Rajkot",
            link: "https://www.swiggy.com/city/rajkot",
          },
          {
            text: "Kozhikode",
            link: "https://www.swiggy.com/city/kozhikode",
          },
          {
            text: "Central Goa",
            link: "https://www.swiggy.com/city/central-goa",
          },
          {
            text: "Sirsa",
            link: "https://www.swiggy.com/city/sirsa",
          },
          {
            text: "Gwalior",
            link: "https://www.swiggy.com/city/gwalior",
          },
          {
            text: "Thrissur",
            link: "https://www.swiggy.com/city/thrissur",
          },
          {
            text: "Kharagpur",
            link: "https://www.swiggy.com/city/kharagpur",
          },
          {
            text: "Tirupati",
            link: "https://www.swiggy.com/city/tirupati",
          },
          {
            text: "Tirupur",
            link: "https://www.swiggy.com/city/tirupur",
          },
          {
            text: "Vellore",
            link: "https://www.swiggy.com/city/vellore",
          },
          {
            text: "Thiruvananthapuram",
            link: "https://www.swiggy.com/city/thiruvananthapuram",
          },
          {
            text: "Warangal",
            link: "https://www.swiggy.com/city/warangal",
          },
          {
            text: "Varanasi",
            link: "https://www.swiggy.com/city/varanasi",
          },
          {
            text: "Mangaluru",
            link: "https://www.swiggy.com/city/mangaluru",
          },
          {
            text: "Patna",
            link: "https://www.swiggy.com/city/patna",
          },
          {
            text: "Ranchi",
            link: "https://www.swiggy.com/city/ranchi",
          },
          {
            text: "Faridabad",
            link: "https://www.swiggy.com/city/faridabad",
          },
          {
            text: "Guntur",
            link: "https://www.swiggy.com/city/guntur",
          },
          {
            text: "Ujjain",
            link: "https://www.swiggy.com/city/ujjain",
          },
          {
            text: "Patiala",
            link: "https://www.swiggy.com/city/patiala",
          },
          {
            text: "Karnal",
            link: "https://www.swiggy.com/city/karnal",
          },
          {
            text: "Kakinada",
            link: "https://www.swiggy.com/city/kakinada",
          },
          {
            text: "Rajahmundry",
            link: "https://www.swiggy.com/city/rajahmundry",
          },
          {
            text: "Bilaspur",
            link: "https://www.swiggy.com/city/bilaspur",
          },
          {
            text: "Bhilai",
            link: "https://www.swiggy.com/city/bhilai",
          },
          {
            text: "Anand",
            link: "https://www.swiggy.com/city/anand",
          },
          {
            text: "Bhavnagar",
            link: "https://www.swiggy.com/city/bhavnagar",
          },
          {
            text: "Jammu",
            link: "https://www.swiggy.com/city/jammu",
          },
          {
            text: "Muktsar",
            link: "https://www.swiggy.com/city/muktsar",
          },
          {
            text: "Panipat",
            link: "https://www.swiggy.com/city/panipat",
          },
          {
            text: "Dhanbad",
            link: "https://www.swiggy.com/city/dhanbad",
          },
          {
            text: "Hubli",
            link: "https://www.swiggy.com/city/hubli",
          },
          {
            text: "Belgaum",
            link: "https://www.swiggy.com/city/belgaum",
          },
          {
            text: "Jabalpur",
            link: "https://www.swiggy.com/city/jabalpur",
          },
          {
            text: "Kolhapur",
            link: "https://www.swiggy.com/city/kolhapur",
          },
          {
            text: "Solapur",
            link: "https://www.swiggy.com/city/solapur",
          },
          {
            text: "Shillong",
            link: "https://www.swiggy.com/city/shillong",
          },
          {
            text: "Cuttack",
            link: "https://www.swiggy.com/city/cuttack",
          },
          {
            text: "Aligarh",
            link: "https://www.swiggy.com/city/aligarh",
          },
          {
            text: "Salem",
            link: "https://www.swiggy.com/city/salem",
          },
          {
            text: "Jodhpur",
            link: "https://www.swiggy.com/city/jodhpur",
          },
          {
            text: "Ajmer",
            link: "https://www.swiggy.com/city/ajmer",
          },
          {
            text: "Jhansi",
            link: "https://www.swiggy.com/city/jhansi",
          },
          {
            text: "Gorakhpur",
            link: "https://www.swiggy.com/city/gorakhpur",
          },
          {
            text: "Thanjavur",
            link: "https://www.swiggy.com/city/thanjavur",
          },
          {
            text: "Erode",
            link: "https://www.swiggy.com/city/erode",
          },
          {
            text: "Nellore",
            link: "https://www.swiggy.com/city/nellore",
          },
          {
            text: "Rourkela",
            link: "https://www.swiggy.com/city/rourkela",
          },
          {
            text: "Anantapur",
            link: "https://www.swiggy.com/city/anantapur",
          },
          {
            text: "Kurnool",
            link: "https://www.swiggy.com/city/kurnool",
          },
          {
            text: "Ahmednagar",
            link: "https://www.swiggy.com/city/ahmednagar",
          },
          {
            text: "Phagwara",
            link: "https://www.swiggy.com/city/phagwara",
          },
          {
            text: "Ambala",
            link: "https://www.swiggy.com/city/ambala",
          },
          {
            text: "Ballari",
            link: "https://www.swiggy.com/city/ballari",
          },
          {
            text: "Saharanpur",
            link: "https://www.swiggy.com/city/saharanpur",
          },
          {
            text: "Tirunelveli",
            link: "https://www.swiggy.com/city/tirunelveli",
          },
          {
            text: "Bathinda",
            link: "https://www.swiggy.com/city/bathinda",
          },
          {
            text: "Mathura",
            link: "https://www.swiggy.com/city/mathura",
          },
          {
            text: "Haridwar",
            link: "https://www.swiggy.com/city/haridwar",
          },
          {
            text: "Ratnagiri",
            link: "https://www.swiggy.com/city/ratnagiri",
          },
          {
            text: "Sangli",
            link: "https://www.swiggy.com/city/sangli",
          },
          {
            text: "Amravati",
            link: "https://www.swiggy.com/city/amravati",
          },
          {
            text: "Rishikesh",
            link: "https://www.swiggy.com/city/rishikesh",
          },
          {
            text: "Nagercoil",
            link: "https://www.swiggy.com/city/nagercoil",
          },
          {
            text: "KanyaKumari",
            link: "https://www.swiggy.com/city/kanyakumari",
          },
          {
            text: "Kadapa",
            link: "https://www.swiggy.com/city/kadapa",
          },
          {
            text: "Nizamabad",
            link: "https://www.swiggy.com/city/nizamabad",
          },
          {
            text: "Shivamogga",
            link: "https://www.swiggy.com/city/shivamogga",
          },
          {
            text: "Davanagere",
            link: "https://www.swiggy.com/city/davanagere",
          },
          {
            text: "Roorkee",
            link: "https://www.swiggy.com/city/roorkee",
          },
          {
            text: "Nanded",
            link: "https://www.swiggy.com/city/nanded",
          },
          {
            text: "Rewa",
            link: "https://www.swiggy.com/city/rewa",
          },
          {
            text: "Satna",
            link: "https://www.swiggy.com/city/satna",
          },
          {
            text: "Muzaffarpur",
            link: "https://www.swiggy.com/city/muzaffarpur",
          },
          {
            text: "Valsad",
            link: "https://www.swiggy.com/city/valsad",
          },
          {
            text: "Vapi",
            link: "https://www.swiggy.com/city/vapi",
          },
          {
            text: "Chhapra",
            link: "https://www.swiggy.com/city/chhapra",
          },
          {
            text: "Dharamshala",
            link: "https://www.swiggy.com/city/dharamshala",
          },
          {
            text: "Kollam",
            link: "https://www.swiggy.com/city/kollam",
          },
          {
            text: "Silchar",
            link: "https://www.swiggy.com/city/silchar",
          },
          {
            text: "Alappuzha",
            link: "https://www.swiggy.com/city/alappuzha",
          },
          {
            text: "Sonipat",
            link: "https://www.swiggy.com/city/sonipat",
          },
          {
            text: "Rohtak",
            link: "https://www.swiggy.com/city/rohtak",
          },
          {
            text: "Mehsana",
            link: "https://www.swiggy.com/city/mehsana",
          },
          {
            text: "Kullu",
            link: "https://www.swiggy.com/city/kullu",
          },
          {
            text: "Dhule",
            link: "https://www.swiggy.com/city/dhule",
          },
          {
            text: "Dharwad",
            link: "https://www.swiggy.com/city/dharwad",
          },
          {
            text: "Latur",
            link: "https://www.swiggy.com/city/latur",
          },
          {
            text: "Vizianagaram",
            link: "https://www.swiggy.com/city/vizianagaram",
          },
          {
            text: "Khammam",
            link: "https://www.swiggy.com/city/khammam",
          },
          {
            text: "Hampi",
            link: "https://www.swiggy.com/city/hampi",
          },
          {
            text: "Nainital",
            link: "https://www.swiggy.com/city/nainital",
          },
          {
            text: "Akola",
            link: "https://www.swiggy.com/city/akola",
          },
          {
            text: "Kalaburagi",
            link: "https://www.swiggy.com/city/kalaburagi",
          },
          {
            text: "Gaya",
            link: "https://www.swiggy.com/city/gaya",
          },
          {
            text: "Muzaffarnagar",
            link: "https://www.swiggy.com/city/muzaffarnagar",
          },
          {
            text: "Dewas",
            link: "https://www.swiggy.com/city/dewas",
          },
          {
            text: "Korba",
            link: "https://www.swiggy.com/city/korba",
          },
          {
            text: "Mussoorie",
            link: "https://www.swiggy.com/city/mussoorie",
          },
          {
            text: "Jalgaon",
            link: "https://www.swiggy.com/city/jalgaon",
          },
          {
            text: "Yamuna Nagar",
            link: "https://www.swiggy.com/city/yamuna-nagar",
          },
          {
            text: "Bhagalpur",
            link: "https://www.swiggy.com/city/bhagalpur",
          },
          {
            text: "Hapur",
            link: "https://www.swiggy.com/city/hapur",
          },
          {
            text: "Morena",
            link: "https://www.swiggy.com/city/morena",
          },
          {
            text: "Hassan",
            link: "https://www.swiggy.com/city/hassan",
          },
          {
            text: "Hisar",
            link: "https://www.swiggy.com/city/hisar",
          },
          {
            text: "Godhra",
            link: "https://www.swiggy.com/city/godhra",
          },
          {
            text: "Kolar ",
            link: "https://www.swiggy.com/city/kolar",
          },
          {
            text: "Rampur",
            link: "https://www.swiggy.com/city/rampur",
          },
          {
            text: "Sitapur",
            link: "https://www.swiggy.com/city/sitapur",
          },
          {
            text: "Etawah",
            link: "https://www.swiggy.com/city/etawah",
          },
          {
            text: "Porbandar",
            link: "https://www.swiggy.com/city/porbandar",
          },
          {
            text: "Nadiad",
            link: "https://www.swiggy.com/city/nadiad",
          },
          {
            text: "Sagar",
            link: "https://www.swiggy.com/city/sagar",
          },
          {
            text: "Morbi",
            link: "https://www.swiggy.com/city/morbi",
          },
          {
            text: "Chhindwara",
            link: "https://www.swiggy.com/city/chhindwara",
          },
          {
            text: "Tumakuru",
            link: "https://www.swiggy.com/city/tumakuru",
          },
          {
            text: "Singrauli",
            link: "https://www.swiggy.com/city/singrauli",
          },
          {
            text: "Thoothukudi",
            link: "https://www.swiggy.com/city/thoothukudi",
          },
          {
            text: "Katni",
            link: "https://www.swiggy.com/city/katni",
          },
          {
            text: "Khandwa",
            link: "https://www.swiggy.com/city/khandwa",
          },
          {
            text: "Eluru",
            link: "https://www.swiggy.com/city/eluru",
          },
          {
            text: "Malappuram",
            link: "https://www.swiggy.com/city/malappuram",
          },
          {
            text: "Dibrugarh",
            link: "https://www.swiggy.com/city/dibrugarh",
          },
          {
            text: "Deoghar",
            link: "https://www.swiggy.com/city/deoghar",
          },
          {
            text: "Khanna",
            link: "https://www.swiggy.com/city/khanna",
          },
          {
            text: "Bidar",
            link: "https://www.swiggy.com/city/bidar",
          },
          {
            text: "Madikeri",
            link: "https://www.swiggy.com/city/madikeri",
          },
          {
            text: "Haldwani",
            link: "https://www.swiggy.com/city/haldwani",
          },
          {
            text: "Farrukhabad",
            link: "https://www.swiggy.com/city/farrukhabad",
          },
          {
            text: "Malegaon",
            link: "https://www.swiggy.com/city/malegaon",
          },
          {
            text: "Dindigul",
            link: "https://www.swiggy.com/city/dindigul",
          },
          {
            text: "Shahjahanpur",
            link: "https://www.swiggy.com/city/shahjahanpur",
          },
          {
            text: "Beed",
            link: "https://www.swiggy.com/city/beed",
          },
          {
            text: "Junagadh",
            link: "https://www.swiggy.com/city/junagadh",
          },
          {
            text: "Asansol",
            link: "https://www.swiggy.com/city/asansol",
          },
          {
            text: "Beawar",
            link: "https://www.swiggy.com/city/beawar",
          },
          {
            text: "Kishangarh",
            link: "https://www.swiggy.com/city/kishangarh",
          },
          {
            text: "Parbhani",
            link: "https://www.swiggy.com/city/parbhani",
          },
          {
            text: "Gondia",
            link: "https://www.swiggy.com/city/gondia",
          },
          {
            text: "Ichalkaranji",
            link: "https://www.swiggy.com/city/ichalkaranji",
          },
          {
            text: "Jalna",
            link: "https://www.swiggy.com/city/jalna",
          },
          {
            text: "Yavatmal",
            link: "https://www.swiggy.com/city/yavatmal",
          },
          {
            text: "Shivpuri",
            link: "https://www.swiggy.com/city/shivpuri",
          },
          {
            text: "Moga",
            link: "https://www.swiggy.com/city/moga",
          },
          {
            text: "Abohar",
            link: "https://www.swiggy.com/city/abohar",
          },
          {
            text: "Adoni",
            link: "https://www.swiggy.com/city/adoni",
          },
          {
            text: "Madanapalle",
            link: "https://www.swiggy.com/city/madanapalle",
          },
          {
            text: "Tiruvannamalai",
            link: "https://www.swiggy.com/city/tiruvannamalai",
          },
          {
            text: "Satara",
            link: "https://www.swiggy.com/city/satara",
          },
          {
            text: "Ambur",
            link: "https://www.swiggy.com/city/ambur",
          },
          {
            text: "Karimnagar",
            link: "https://www.swiggy.com/city/karimnagar",
          },
          {
            text: "Ratlam",
            link: "https://www.swiggy.com/city/ratlam",
          },
          {
            text: "Moradabad",
            link: "https://www.swiggy.com/city/moradabad",
          },
          {
            text: "Machilipatnam",
            link: "https://www.swiggy.com/city/machilipatnam",
          },
          {
            text: "Ongole",
            link: "https://www.swiggy.com/city/ongole",
          },
          {
            text: "Kottayam",
            link: "https://www.swiggy.com/city/kottayam",
          },
          {
            text: "Darbhanga",
            link: "https://www.swiggy.com/city/darbhanga",
          },
          {
            text: "Kurukshetra",
            link: "https://www.swiggy.com/city/kurukshetra",
          },
          {
            text: "Unnao",
            link: "https://www.swiggy.com/city/unnao",
          },
          {
            text: "Bulandshahr",
            link: "https://www.swiggy.com/city/bulandshahr",
          },
          {
            text: "Durgapur",
            link: "https://www.swiggy.com/city/durgapur",
          },
          {
            text: "Siliguri",
            link: "https://www.swiggy.com/city/siliguri",
          },
          {
            text: "Pali",
            link: "https://www.swiggy.com/city/pali",
          },
          {
            text: "Tadepalligudem",
            link: "https://www.swiggy.com/city/tadepalligudem",
          },
          {
            text: "Ramagundam",
            link: "https://www.swiggy.com/city/ramagundam",
          },
          {
            text: "Mahbubnagar",
            link: "https://www.swiggy.com/city/mahbubnagar",
          },
          {
            text: "Bhiwani",
            link: "https://www.swiggy.com/city/bhiwani",
          },
          {
            text: "Cuddalore",
            link: "https://www.swiggy.com/city/cuddalore",
          },
          {
            text: "Kaithal",
            link: "https://www.swiggy.com/city/kaithal",
          },
          {
            text: "Jagtial",
            link: "https://www.swiggy.com/city/jagtial",
          },
          {
            text: "Palakkad",
            link: "https://www.swiggy.com/city/palakkad",
          },
          {
            text: "Guna",
            link: "https://www.swiggy.com/city/guna",
          },
          {
            text: "Kumbakonam",
            link: "https://www.swiggy.com/city/kumbakonam",
          },
          {
            text: "Maunath Bhanjan",
            link: "https://www.swiggy.com/city/maunath-bhanjan",
          },
          {
            text: "Baripada",
            link: "https://www.swiggy.com/city/baripada",
          },
          {
            text: "Orai",
            link: "https://www.swiggy.com/city/orai",
          },
          {
            text: "Bhadrak",
            link: "https://www.swiggy.com/city/bhadrak",
          },
          {
            text: "Batala",
            link: "https://www.swiggy.com/city/batala",
          },
          {
            text: "Firozpur",
            link: "https://www.swiggy.com/city/firozpur",
          },
          {
            text: "Barnala",
            link: "https://www.swiggy.com/city/barnala",
          },
          {
            text: "Raigarh",
            link: "https://www.swiggy.com/city/raigarh",
          },
          {
            text: "Nagaon",
            link: "https://www.swiggy.com/city/nagaon",
          },
          {
            text: "Mainpuri",
            link: "https://www.swiggy.com/city/mainpuri",
          },
          {
            text: "Balurghat",
            link: "https://www.swiggy.com/city/balurghat",
          },
          {
            text: "Giridih",
            link: "https://www.swiggy.com/city/giridih",
          },
          {
            text: "Ghazipur",
            link: "https://www.swiggy.com/city/ghazipur",
          },
          {
            text: "Jagdalpur",
            link: "https://www.swiggy.com/city/jagdalpur",
          },
          {
            text: "Vidisha",
            link: "https://www.swiggy.com/city/vidisha",
          },
          {
            text: "Dimapur",
            link: "https://www.swiggy.com/city/dimapur",
          },
          {
            text: "Shikohabad",
            link: "https://www.swiggy.com/city/shikohabad",
          },
          {
            text: "Imphal",
            link: "https://www.swiggy.com/city/imphal",
          },
          {
            text: "Lakhimpur",
            link: "https://www.swiggy.com/city/lakhimpur",
          },
          {
            text: "Rudrapur",
            link: "https://www.swiggy.com/city/rudrapur",
          },
          {
            text: "Ambikapur",
            link: "https://www.swiggy.com/city/ambikapur",
          },
          {
            text: "Rae Bareli",
            link: "https://www.swiggy.com/city/rae-bareli",
          },
          {
            text: "Tinsukia",
            link: "https://www.swiggy.com/city/tinsukia",
          },
          {
            text: "Rajapalayam",
            link: "https://www.swiggy.com/city/rajapalayam",
          },
          {
            text: "Rajnandgaon",
            link: "https://www.swiggy.com/city/rajnandgaon",
          },
          {
            text: "Kashipur",
            link: "https://www.swiggy.com/city/kashipur",
          },
          {
            text: "Ranibennur",
            link: "https://www.swiggy.com/city/ranibennur",
          },
          {
            text: "Burhanpur",
            link: "https://www.swiggy.com/city/burhanpur",
          },
          {
            text: "Bhadravati",
            link: "https://www.swiggy.com/city/bhadravati",
          },
          {
            text: "Chittoor",
            link: "https://www.swiggy.com/city/chittoor",
          },
          {
            text: "Pudukkottai",
            link: "https://www.swiggy.com/city/pudukkottai",
          },
          {
            text: "Hardoi",
            link: "https://www.swiggy.com/city/hardoi",
          },
          {
            text: "Basti",
            link: "https://www.swiggy.com/city/basti",
          },
          {
            text: "Karaikkudi",
            link: "https://www.swiggy.com/city/karaikkudi",
          },
          {
            text: "Lalitpur",
            link: "https://www.swiggy.com/city/lalitpur",
          },
          {
            text: "Hospet",
            link: "https://www.swiggy.com/city/hospet",
          },
          {
            text: "Budaun",
            link: "https://www.swiggy.com/city/budaun",
          },
          {
            text: "Neemuch",
            link: "https://www.swiggy.com/city/neemuch",
          },
          {
            text: "Pilibhit",
            link: "https://www.swiggy.com/city/pilibhit",
          },
          {
            text: "Barshi",
            link: "https://www.swiggy.com/city/barshi",
          },
          {
            text: "Sri Ganganagar",
            link: "https://www.swiggy.com/city/sri-ganganagar",
          },
          {
            text: "Wardha",
            link: "https://www.swiggy.com/city/wardha",
          },
          {
            text: "Sehore",
            link: "https://www.swiggy.com/city/sehore",
          },
          {
            text: "Bhimavaram",
            link: "https://www.swiggy.com/city/bhimavaram",
          },
          {
            text: "Hanumangarh",
            link: "https://www.swiggy.com/city/hanumangarh",
          },
          {
            text: "Pathankot",
            link: "https://www.swiggy.com/city/pathankot",
          },
          {
            text: "Puri",
            link: "https://www.swiggy.com/city/puri",
          },
          {
            text: "Fatehpur",
            link: "https://www.swiggy.com/city/fatehpur",
          },
          {
            text: "Surendranagar Dudhrej",
            link: "https://www.swiggy.com/city/surendranagar-dudhrej",
          },
          {
            text: "Jamnagar",
            link: "https://www.swiggy.com/city/jamnagar",
          },
          {
            text: "Bhuj",
            link: "https://www.swiggy.com/city/bhuj",
          },
          {
            text: "Gandhidham",
            link: "https://www.swiggy.com/city/gandhidham",
          },
          {
            text: "Bharuch",
            link: "https://www.swiggy.com/city/bharuch",
          },
          {
            text: "Navsari",
            link: "https://www.swiggy.com/city/navsari",
          },
          {
            text: "Amreli",
            link: "https://www.swiggy.com/city/amreli",
          },
          {
            text: "Palanpur",
            link: "https://www.swiggy.com/city/palanpur",
          },
          {
            text: "Bhilwara",
            link: "https://www.swiggy.com/city/bhilwara",
          },
          {
            text: "Suratgarh",
            link: "https://www.swiggy.com/city/suratgarh",
          },
          {
            text: "Sikar",
            link: "https://www.swiggy.com/city/sikar",
          },
          {
            text: "Churu",
            link: "https://www.swiggy.com/city/churu",
          },
          {
            text: "Alwar",
            link: "https://www.swiggy.com/city/alwar",
          },
          {
            text: "Bhiwadi",
            link: "https://www.swiggy.com/city/bhiwadi",
          },
          {
            text: "Bharatpur",
            link: "https://www.swiggy.com/city/bharatpur",
          },
          {
            text: "Mount Abu",
            link: "https://www.swiggy.com/city/mount-abu",
          },
          {
            text: "Bundi",
            link: "https://www.swiggy.com/city/bundi",
          },
          {
            text: "Sawai Madhopur",
            link: "https://www.swiggy.com/city/sawai-madhopur",
          },
          {
            text: "Purulia",
            link: "https://www.swiggy.com/city/purulia",
          },
          {
            text: "Bardhaman",
            link: "https://www.swiggy.com/city/bardhaman",
          },
          {
            text: "Raniganj",
            link: "https://www.swiggy.com/city/raniganj",
          },
          {
            text: "Darjeeling",
            link: "https://www.swiggy.com/city/darjeeling",
          },
          {
            text: "Jalpaiguri",
            link: "https://www.swiggy.com/city/jalpaiguri",
          },
          {
            text: "Chittorgarh",
            link: "https://www.swiggy.com/city/chittorgarh",
          },
          {
            text: "Dholpur",
            link: "https://www.swiggy.com/city/dholpur",
          },
          {
            text: "Uluberia",
            link: "https://www.swiggy.com/city/uluberia",
          },
          {
            text: "Nabadwip",
            link: "https://www.swiggy.com/city/nabadwip",
          },
          {
            text: "Bongaon",
            link: "https://www.swiggy.com/city/bongaon",
          },
          {
            text: "Kanchrapara",
            link: "https://www.swiggy.com/city/kanchrapara",
          },
          {
            text: "Habra",
            link: "https://www.swiggy.com/city/habra",
          },
          {
            text: "Firozabad",
            link: "https://www.swiggy.com/city/firozabad",
          },
          {
            text: "Nalgonda",
            link: "https://www.swiggy.com/city/nalgonda",
          },
          {
            text: "Chandrapur",
            link: "https://www.swiggy.com/city/chandrapur",
          },
          {
            text: "Bijapur",
            link: "https://www.swiggy.com/city/bijapur",
          },
          {
            text: "Bhusawal",
            link: "https://www.swiggy.com/city/bhusawal",
          },
          {
            text: "Raichur",
            link: "https://www.swiggy.com/city/raichur",
          },
          {
            text: "Bahraich",
            link: "https://www.swiggy.com/city/bahraich",
          },
          {
            text: "Azamgarh",
            link: "https://www.swiggy.com/city/azamgarh",
          },
          {
            text: "Bahadurgarh",
            link: "https://www.swiggy.com/city/bahadurgarh",
          },
          {
            text: "Jind",
            link: "https://www.swiggy.com/city/jind",
          },
          {
            text: "Rewari",
            link: "https://www.swiggy.com/city/rewari",
          },
          {
            text: "Palwal",
            link: "https://www.swiggy.com/city/palwal",
          },
          {
            text: "Hathras",
            link: "https://www.swiggy.com/city/hathras",
          },
          {
            text: "Sambalpur",
            link: "https://www.swiggy.com/city/sambalpur",
          },
          {
            text: "Banda",
            link: "https://www.swiggy.com/city/banda",
          },
          {
            text: "Hoshiarpur",
            link: "https://www.swiggy.com/city/hoshiarpur",
          },
          {
            text: "Faridkot",
            link: "https://www.swiggy.com/city/faridkot",
          },
          {
            text: "Mandsaur",
            link: "https://www.swiggy.com/city/mandsaur",
          },
          {
            text: "Suryapet",
            link: "https://www.swiggy.com/city/suryapet",
          },
          {
            text: "Adilabad",
            link: "https://www.swiggy.com/city/adilabad",
          },
          {
            text: "Narasaraopet",
            link: "https://www.swiggy.com/city/narasaraopet",
          },
          {
            text: "Faizabad",
            link: "https://www.swiggy.com/city/faizabad",
          },
          {
            text: "Tadpatri",
            link: "https://www.swiggy.com/city/tadpatri",
          },
          {
            text: "Gonda",
            link: "https://www.swiggy.com/city/gonda",
          },
          {
            text: "Mughalsarai",
            link: "https://www.swiggy.com/city/mughalsarai",
          },
          {
            text: "Medinipur",
            link: "https://www.swiggy.com/city/medinipur",
          },
          {
            text: "Nagda",
            link: "https://www.swiggy.com/city/nagda",
          },
          {
            text: "Raiganj",
            link: "https://www.swiggy.com/city/raiganj",
          },
          {
            text: "Deoria City",
            link: "https://www.swiggy.com/city/deoria-city",
          },
          {
            text: "Sultanpur",
            link: "https://www.swiggy.com/city/sultanpur",
          },
          {
            text: "Shamli",
            link: "https://www.swiggy.com/city/shamli",
          },
          {
            text: "Krishnanagar",
            link: "https://www.swiggy.com/city/krishnanagar",
          },
          {
            text: "Ballia",
            link: "https://www.swiggy.com/city/ballia",
          },
          {
            text: "Guntakal",
            link: "https://www.swiggy.com/city/guntakal",
          },
          {
            text: "Miryalaguda",
            link: "https://www.swiggy.com/city/miryalaguda",
          },
          {
            text: "Etah",
            link: "https://www.swiggy.com/city/etah",
          },
          {
            text: "Berhampore",
            link: "https://www.swiggy.com/city/berhampore",
          },
          {
            text: "Gudivada",
            link: "https://www.swiggy.com/city/gudivada",
          },
          {
            text: "Haldia",
            link: "https://www.swiggy.com/city/haldia",
          },
          {
            text: "Santipur",
            link: "https://www.swiggy.com/city/santipur",
          },
          {
            text: "Basirhat",
            link: "https://www.swiggy.com/city/basirhat",
          },
          {
            text: "Udgir",
            link: "https://www.swiggy.com/city/udgir",
          },
          {
            text: "Proddatur",
            link: "https://www.swiggy.com/city/proddatur",
          },
          {
            text: "Nagapattinam",
            link: "https://www.swiggy.com/city/nagapattinam",
          },
          {
            text: "Chikmagalur",
            link: "https://www.swiggy.com/city/chikmagalur",
          },
          {
            text: "Chandausi",
            link: "https://www.swiggy.com/city/chandausi",
          },
          {
            text: "Bhind",
            link: "https://www.swiggy.com/city/bhind",
          },
          {
            text: "Mandya",
            link: "https://www.swiggy.com/city/mandya",
          },
          {
            text: "Bagalkot",
            link: "https://www.swiggy.com/city/bagalkot",
          },
          {
            text: "Nandurbar",
            link: "https://www.swiggy.com/city/nandurbar",
          },
          {
            text: "Chitradurga",
            link: "https://www.swiggy.com/city/chitradurga",
          },
          {
            text: "Osmanabad",
            link: "https://www.swiggy.com/city/osmanabad",
          },
          {
            text: "Modinagar",
            link: "https://www.swiggy.com/city/modinagar",
          },
          {
            text: "Gadag-Betigeri",
            link: "https://www.swiggy.com/city/gadag-betigeri",
          },
          {
            text: "Hoshangabad",
            link: "https://www.swiggy.com/city/hoshangabad",
          },
          {
            text: "Jaunpur",
            link: "https://www.swiggy.com/city/jaunpur",
          },
          {
            text: "Port Blair",
            link: "https://www.swiggy.com/city/port-blair",
          },
          {
            text: "Jorhat",
            link: "https://www.swiggy.com/city/jorhat",
          },
          {
            text: "Nandyal",
            link: "https://www.swiggy.com/city/nandyal",
          },
          {
            text: "Biharsharif",
            link: "https://www.swiggy.com/city/biharsharif",
          },
          {
            text: "Buxar",
            link: "https://www.swiggy.com/city/buxar",
          },
          {
            text: "Siwan",
            link: "https://www.swiggy.com/city/siwan",
          },
          {
            text: "Dehri",
            link: "https://www.swiggy.com/city/dehri",
          },
          {
            text: "Bettiah",
            link: "https://www.swiggy.com/city/bettiah",
          },
          {
            text: "Kishanganj",
            link: "https://www.swiggy.com/city/kishanganj",
          },
          {
            text: "Saharsa",
            link: "https://www.swiggy.com/city/saharsa",
          },
          {
            text: "Hajipur",
            link: "https://www.swiggy.com/city/hajipur",
          },
          {
            text: "Motihari",
            link: "https://www.swiggy.com/city/motihari",
          },
          {
            text: "Sasaram",
            link: "https://www.swiggy.com/city/sasaram",
          },
          {
            text: "Munger",
            link: "https://www.swiggy.com/city/munger",
          },
          {
            text: "Katihar",
            link: "https://www.swiggy.com/city/katihar",
          },
          {
            text: "Arrah",
            link: "https://www.swiggy.com/city/arrah",
          },
          {
            text: "Srikakulam",
            link: "https://www.swiggy.com/city/srikakulam",
          },
          {
            text: "Begusarai",
            link: "https://www.swiggy.com/city/begusarai",
          },
          {
            text: "Neyveli",
            link: "https://www.swiggy.com/city/neyveli",
          },
          {
            text: "Waidhan",
            link: "https://www.swiggy.com/city/waidhan",
          },
          {
            text: "Markapur",
            link: "https://www.swiggy.com/city/markapur",
          },
          {
            text: "Chikkaballapur",
            link: "https://www.swiggy.com/city/chikkaballapur",
          },
          {
            text: "Bhatkal",
            link: "https://www.swiggy.com/city/bhatkal",
          },
          {
            text: "Gokak",
            link: "https://www.swiggy.com/city/gokak",
          },
          {
            text: "Itarsi",
            link: "https://www.swiggy.com/city/itarsi",
          },
          {
            text: "Dhar",
            link: "https://www.swiggy.com/city/dhar",
          },
          {
            text: "Chalisgaon",
            link: "https://www.swiggy.com/city/chalisgaon",
          },
          {
            text: "Thiruvallur",
            link: "https://www.swiggy.com/city/thiruvallur",
          },
          {
            text: "Namakkal",
            link: "https://www.swiggy.com/city/namakkal",
          },
          {
            text: "Dharmapuri",
            link: "https://www.swiggy.com/city/dharmapuri",
          },
          {
            text: "Bhandara",
            link: "https://www.swiggy.com/city/bhandara",
          },
          {
            text: "Virudhunagar",
            link: "https://www.swiggy.com/city/virudhunagar",
          },
          {
            text: "Siddipet",
            link: "https://www.swiggy.com/city/siddipet",
          },
          {
            text: "Gadwal",
            link: "https://www.swiggy.com/city/gadwal",
          },
          {
            text: "Bodhan-Rural",
            link: "https://www.swiggy.com/city/bodhan-rural",
          },
          {
            text: "Kamareddy",
            link: "https://www.swiggy.com/city/kamareddy",
          },
          {
            text: "Jhunjhunu",
            link: "https://www.swiggy.com/city/jhunjhunu",
          },
          {
            text: "Kapurthala",
            link: "https://www.swiggy.com/city/kapurthala",
          },
          {
            text: "Sangrur",
            link: "https://www.swiggy.com/city/sangrur",
          },
          {
            text: "Gurdaspur",
            link: "https://www.swiggy.com/city/gurdaspur",
          },
          {
            text: "Ramgarh",
            link: "https://www.swiggy.com/city/ramgarh",
          },
          {
            text: "Bantwal",
            link: "https://www.swiggy.com/city/bantwal",
          },
          {
            text: "Doddaballapura",
            link: "https://www.swiggy.com/city/doddaballapura",
          },
          {
            text: "Buldana",
            link: "https://www.swiggy.com/city/buldana",
          },
          {
            text: "Karad",
            link: "https://www.swiggy.com/city/karad",
          },
          {
            text: "Krishnagiri",
            link: "https://www.swiggy.com/city/krishnagiri",
          },
          {
            text: "Tiptur",
            link: "https://www.swiggy.com/city/tiptur",
          },
          {
            text: "Bhadrachalam",
            link: "https://www.swiggy.com/city/bhadrachalam",
          },
          {
            text: "Mancherial",
            link: "https://www.swiggy.com/city/mancherial",
          },
          {
            text: "Balrampur",
            link: "https://www.swiggy.com/city/balrampur",
          },
          {
            text: "Bharabanki",
            link: "https://www.swiggy.com/city/bharabanki",
          },
          {
            text: "Malout",
            link: "https://www.swiggy.com/city/malout",
          },
          {
            text: "Fatehgarh Sahib",
            link: "https://www.swiggy.com/city/fatehgarh-sahib",
          },
          {
            text: "Ropar",
            link: "https://www.swiggy.com/city/ropar",
          },
          {
            text: "Nangal",
            link: "https://www.swiggy.com/city/nangal",
          },
          {
            text: "Narnaul",
            link: "https://www.swiggy.com/city/narnaul",
          },
          {
            text: "Naraingarh",
            link: "https://www.swiggy.com/city/naraingarh",
          },
          {
            text: "Himmatnagar",
            link: "https://www.swiggy.com/city/himmatnagar",
          },
          {
            text: "Dausa",
            link: "https://www.swiggy.com/city/dausa",
          },
          {
            text: "Jahanabad",
            link: "https://www.swiggy.com/city/jahanabad",
          },
          {
            text: "Samastipur",
            link: "https://www.swiggy.com/city/samastipur",
          },
          {
            text: "Purnea",
            link: "https://www.swiggy.com/city/purnea",
          },
          {
            text: "Berhampur",
            link: "https://www.swiggy.com/city/berhampur",
          },
          {
            text: "Malda",
            link: "https://www.swiggy.com/city/malda",
          },
          {
            text: "Tuni",
            link: "https://www.swiggy.com/city/tuni",
          },
          {
            text: "Puttur",
            link: "https://www.swiggy.com/city/puttur",
          },
          {
            text: "Rayachoty",
            link: "https://www.swiggy.com/city/rayachoty",
          },
          {
            text: "Nirmal",
            link: "https://www.swiggy.com/city/nirmal",
          },
          {
            text: "Mirzapur",
            link: "https://www.swiggy.com/city/mirzapur",
          },
          {
            text: "Tanuku",
            link: "https://www.swiggy.com/city/tanuku",
          },
          {
            text: "Dahod",
            link: "https://www.swiggy.com/city/dahod",
          },
          {
            text: "Barmer",
            link: "https://www.swiggy.com/city/barmer",
          },
          {
            text: "Gangapur City",
            link: "https://www.swiggy.com/city/gangapur-city",
          },
          {
            text: "Mandi Gobindgarh",
            link: "https://www.swiggy.com/city/mandi-gobindgarh",
          },
          {
            text: "Tarn Taran Sahib",
            link: "https://www.swiggy.com/city/tarn-taran-sahib",
          },
          {
            text: "Nakodar",
            link: "https://www.swiggy.com/city/nakodar",
          },
          {
            text: "Ankleshwar",
            link: "https://www.swiggy.com/city/ankleshwar",
          },
          {
            text: "Vyara",
            link: "https://www.swiggy.com/city/vyara",
          },
          {
            text: "Bardoli",
            link: "https://www.swiggy.com/city/bardoli",
          },
          {
            text: "Halol",
            link: "https://www.swiggy.com/city/halol",
          },
          {
            text: "Bijnor",
            link: "https://www.swiggy.com/city/bijnor",
          },
          {
            text: "Sangamner",
            link: "https://www.swiggy.com/city/sangamner",
          },
          {
            text: "Baramati",
            link: "https://www.swiggy.com/city/baramati",
          },
          {
            text: "Betul",
            link: "https://www.swiggy.com/city/betul",
          },
          {
            text: "Chhatarpur",
            link: "https://www.swiggy.com/city/chhatarpur",
          },
          {
            text: "Balaghat",
            link: "https://www.swiggy.com/city/balaghat",
          },
          {
            text: "Sivakasi",
            link: "https://www.swiggy.com/city/sivakasi",
          },
          {
            text: "Viluppuram",
            link: "https://www.swiggy.com/city/viluppuram",
          },
          {
            text: "Ramanathapuram",
            link: "https://www.swiggy.com/city/ramanathapuram",
          },
          {
            text: "Sirsi",
            link: "https://www.swiggy.com/city/sirsi",
          },
          {
            text: "Theni",
            link: "https://www.swiggy.com/city/theni",
          },
          {
            text: "Karur",
            link: "https://www.swiggy.com/city/karur",
          },
          {
            text: "Karwar",
            link: "https://www.swiggy.com/city/karwar",
          },
          {
            text: "Sindhanur",
            link: "https://www.swiggy.com/city/sindhanur",
          },
          {
            text: "Kannur",
            link: "https://www.swiggy.com/city/kannur",
          },
          {
            text: "Noida 1",
            link: "https://www.swiggy.com/city/noida-1",
          },
          {
            text: "Thiruvalla",
            link: "https://www.swiggy.com/city/thiruvalla",
          },
          {
            text: "Thodupuzha",
            link: "https://www.swiggy.com/city/thodupuzha",
          },
          {
            text: "Kadiri",
            link: "https://www.swiggy.com/city/kadiri",
          },
          {
            text: "Kavali",
            link: "https://www.swiggy.com/city/kavali",
          },
          {
            text: "Tezpur",
            link: "https://www.swiggy.com/city/tezpur",
          },
          {
            text: "Kayamkulam",
            link: "https://www.swiggy.com/city/kayamkulam",
          },
          {
            text: "Kottarakkara",
            link: "https://www.swiggy.com/city/kottarakkara",
          },
          {
            text: "Mandi Dabwali",
            link: "https://www.swiggy.com/city/mandi-dabwali",
          },
          {
            text: "Fatehabad",
            link: "https://www.swiggy.com/city/fatehabad",
          },
          {
            text: "Jagraon",
            link: "https://www.swiggy.com/city/jagraon",
          },
          {
            text: "Mansa",
            link: "https://www.swiggy.com/city/mansa",
          },
          {
            text: "Pinjore City",
            link: "https://www.swiggy.com/city/pinjore-city",
          },
          {
            text: "Fazilka",
            link: "https://www.swiggy.com/city/fazilka",
          },
          {
            text: "Baddi",
            link: "https://www.swiggy.com/city/baddi",
          },
          {
            text: "Solan",
            link: "https://www.swiggy.com/city/solan",
          },
          {
            text: "Daltonganj",
            link: "https://www.swiggy.com/city/daltonganj",
          },
          {
            text: "Balangir",
            link: "https://www.swiggy.com/city/balangir",
          },
          {
            text: "Kothagudem",
            link: "https://www.swiggy.com/city/kothagudem",
          },
          {
            text: "Hansi",
            link: "https://www.swiggy.com/city/hansi",
          },
          {
            text: "Aurangabad_Bihar",
            link: "https://www.swiggy.com/city/aurangabadbihar",
          },
          {
            text: "Gopalganj",
            link: "https://www.swiggy.com/city/gopalganj",
          },
          {
            text: "Jharsuguda",
            link: "https://www.swiggy.com/city/jharsuguda",
          },
          {
            text: "Tohana",
            link: "https://www.swiggy.com/city/tohana",
          },
          {
            text: "Jhalawar",
            link: "https://www.swiggy.com/city/jhalawar",
          },
          {
            text: "Sivasagar",
            link: "https://www.swiggy.com/city/sivasagar",
          },
          {
            text: "Bagdogra",
            link: "https://www.swiggy.com/city/bagdogra",
          },
          {
            text: "Kendrapada",
            link: "https://www.swiggy.com/city/kendrapada",
          },
          {
            text: "Mallapuram (Do not Use)",
            link: "https://www.swiggy.com/city/mallapuram-do-not-use",
          },
          {
            text: "Veraval",
            link: "https://www.swiggy.com/city/veraval",
          },
          {
            text: "Daman",
            link: "https://www.swiggy.com/city/daman",
          },
          {
            text: "Chiplun",
            link: "https://www.swiggy.com/city/chiplun",
          },
          {
            text: "Silvassa",
            link: "https://www.swiggy.com/city/silvassa",
          },
          {
            text: "Lonavla",
            link: "https://www.swiggy.com/city/lonavla",
          },
          {
            text: "Bongaigaon",
            link: "https://www.swiggy.com/city/bongaigaon",
          },
          {
            text: "Golaghat",
            link: "https://www.swiggy.com/city/golaghat",
          },
          {
            text: "Duliajan",
            link: "https://www.swiggy.com/city/duliajan",
          },
          {
            text: "Bolpur",
            link: "https://www.swiggy.com/city/bolpur",
          },
          {
            text: "Madhubani",
            link: "https://www.swiggy.com/city/madhubani",
          },
          {
            text: "Balasore",
            link: "https://www.swiggy.com/city/balasore",
          },
          {
            text: "Palampur",
            link: "https://www.swiggy.com/city/palampur",
          },
          {
            text: "Kotdwar",
            link: "https://www.swiggy.com/city/kotdwar",
          },
          {
            text: "Koppal",
            link: "https://www.swiggy.com/city/koppal",
          },
          {
            text: "Chikhli",
            link: "https://www.swiggy.com/city/chikhli",
          },
          {
            text: "Dahanu",
            link: "https://www.swiggy.com/city/dahanu",
          },
          {
            text: "Itanagar",
            link: "https://www.swiggy.com/city/itanagar",
          },
          {
            text: "Rangpo",
            link: "https://www.swiggy.com/city/rangpo",
          },
          {
            text: "Aizawl",
            link: "https://www.swiggy.com/city/aizawl",
          },
          {
            text: "Gangtok",
            link: "https://www.swiggy.com/city/gangtok",
          },
          {
            text: "Mayiladuthurai",
            link: "https://www.swiggy.com/city/mayiladuthurai",
          },
          {
            text: "Kannauj",
            link: "https://www.swiggy.com/city/kannauj",
          },
          {
            text: "Cooch Behar",
            link: "https://www.swiggy.com/city/cooch-behar",
          },
          {
            text: "Palani",
            link: "https://www.swiggy.com/city/palani",
          },
          {
            text: "Bilimora",
            link: "https://www.swiggy.com/city/bilimora",
          },
          {
            text: "Boisar",
            link: "https://www.swiggy.com/city/boisar",
          },
          {
            text: "Kohima",
            link: "https://www.swiggy.com/city/kohima",
          },
          {
            text: "Naharlagun",
            link: "https://www.swiggy.com/city/naharlagun",
          },
          {
            text: "Dumka",
            link: "https://www.swiggy.com/city/dumka",
          },
          {
            text: "Rajsamand",
            link: "https://www.swiggy.com/city/rajsamand",
          },
          {
            text: "Gauriganj",
            link: "https://www.swiggy.com/city/gauriganj",
          },
          {
            text: "Bodinayakanur",
            link: "https://www.swiggy.com/city/bodinayakanur",
          },
          {
            text: "Bhawanipatna",
            link: "https://www.swiggy.com/city/bhawanipatna",
          },
          {
            text: "Baran",
            link: "https://www.swiggy.com/city/baran",
          },
          {
            text: "Narsinghpur",
            link: "https://www.swiggy.com/city/narsinghpur",
          },
          {
            text: "Kovilpatti",
            link: "https://www.swiggy.com/city/kovilpatti",
          },
          {
            text: "Pusad",
            link: "https://www.swiggy.com/city/pusad",
          },
          {
            text: "Kendujhar",
            link: "https://www.swiggy.com/city/kendujhar",
          },
          {
            text: "Manali",
            link: "https://www.swiggy.com/city/manali",
          },
          {
            text: "Diu",
            link: "https://www.swiggy.com/city/diu",
          },
          {
            text: "Khamgaon",
            link: "https://www.swiggy.com/city/khamgaon",
          },
          {
            text: "Ramanagara",
            link: "https://www.swiggy.com/city/ramanagara",
          },
          {
            text: "Alipurduar",
            link: "https://www.swiggy.com/city/alipurduar",
          },
          {
            text: "Almora",
            link: "https://www.swiggy.com/city/almora",
          },
          {
            text: "Jhargram",
            link: "https://www.swiggy.com/city/jhargram",
          },
          {
            text: "Arambagh",
            link: "https://www.swiggy.com/city/arambagh",
          },
          {
            text: "Bhadohi",
            link: "https://www.swiggy.com/city/bhadohi",
          },
          {
            text: "Tenkasi",
            link: "https://www.swiggy.com/city/tenkasi",
          },
          {
            text: "Srivilliputhur",
            link: "https://www.swiggy.com/city/srivilliputhur",
          },
          {
            text: "Chidambaram",
            link: "https://www.swiggy.com/city/chidambaram",
          },
          {
            text: "Rajgarh",
            link: "https://www.swiggy.com/city/rajgarh",
          },
          {
            text: "Pratapgarh",
            link: "https://www.swiggy.com/city/pratapgarh",
          },
          {
            text: "Washim",
            link: "https://www.swiggy.com/city/washim",
          },
          {
            text: "Raghunathpur",
            link: "https://www.swiggy.com/city/raghunathpur",
          },
          {
            text: "Suri",
            link: "https://www.swiggy.com/city/suri",
          },
          {
            text: "Kadayanallur",
            link: "https://www.swiggy.com/city/kadayanallur",
          },
          {
            text: "Thiruvarur",
            link: "https://www.swiggy.com/city/thiruvarur",
          },
          {
            text: "Ranaghat-WB",
            link: "https://www.swiggy.com/city/ranaghat-wb",
          },
          {
            text: "Wayanad",
            link: "https://www.swiggy.com/city/wayanad",
          },
          {
            text: "Perambalur",
            link: "https://www.swiggy.com/city/perambalur",
          },
          {
            text: "Paramakudi",
            link: "https://www.swiggy.com/city/paramakudi",
          },
          {
            text: "Bela Pratapgarh",
            link: "https://www.swiggy.com/city/bela-pratapgarh",
          },
          {
            text: "Mahoba",
            link: "https://www.swiggy.com/city/mahoba",
          },
          {
            text: "Sitamarhi",
            link: "https://www.swiggy.com/city/sitamarhi",
          },
          {
            text: "Chakdaha",
            link: "https://www.swiggy.com/city/chakdaha",
          },
          {
            text: "Khalilabad",
            link: "https://www.swiggy.com/city/khalilabad",
          },
          {
            text: "Pattukkottai",
            link: "https://www.swiggy.com/city/pattukkottai",
          },
          {
            text: "Tindivanam",
            link: "https://www.swiggy.com/city/tindivanam",
          },
          {
            text: "Tiruttani",
            link: "https://www.swiggy.com/city/tiruttani",
          },
          {
            text: "Gangarampur",
            link: "https://www.swiggy.com/city/gangarampur",
          },
          {
            text: "Dharapuram",
            link: "https://www.swiggy.com/city/dharapuram",
          },
          {
            text: "Arakkonam",
            link: "https://www.swiggy.com/city/arakkonam",
          },
          {
            text: "Sirkali",
            link: "https://www.swiggy.com/city/sirkali",
          },
          {
            text: "Mettupalayam",
            link: "https://www.swiggy.com/city/mettupalayam",
          },
          {
            text: "Digboi",
            link: "https://www.swiggy.com/city/digboi",
          },
          {
            text: "Biswanath Chariali",
            link: "https://www.swiggy.com/city/biswanath-chariali",
          },
          {
            text: "Nalbari",
            link: "https://www.swiggy.com/city/nalbari",
          },
          {
            text: "Shirdi city",
            link: "https://www.swiggy.com/city/shirdi-city",
          },
          {
            text: "Mukerian",
            link: "https://www.swiggy.com/city/mukerian",
          },
          {
            text: "Hosur",
            link: "https://www.swiggy.com/city/hosur",
          },
          {
            text: "Palakollu",
            link: "https://www.swiggy.com/city/palakollu",
          },
          {
            text: "Ravulapalem",
            link: "https://www.swiggy.com/city/ravulapalem",
          },
          {
            text: "Barh",
            link: "https://www.swiggy.com/city/barh",
          },
          {
            text: "Palghar",
            link: "https://www.swiggy.com/city/palghar",
          },
          {
            text: "Kushalnagar",
            link: "https://www.swiggy.com/city/kushalnagar",
          },
          {
            text: "Dungarpur",
            link: "https://www.swiggy.com/city/dungarpur",
          },
          {
            text: "Chaibasa",
            link: "https://www.swiggy.com/city/chaibasa",
          },
          {
            text: "Haveri",
            link: "https://www.swiggy.com/city/haveri",
          },
          {
            text: "Karaikal",
            link: "https://www.swiggy.com/city/karaikal",
          },
          {
            text: "Jjajjar",
            link: "https://www.swiggy.com/city/jjajjar",
          },
          {
            text: "Kokrajhar",
            link: "https://www.swiggy.com/city/kokrajhar",
          },
          {
            text: "Rangia",
            link: "https://www.swiggy.com/city/rangia",
          },
          {
            text: "Hamirpur",
            link: "https://www.swiggy.com/city/hamirpur",
          },
          {
            text: "Una",
            link: "https://www.swiggy.com/city/una",
          },
          {
            text: "Sulthan Bathery",
            link: "https://www.swiggy.com/city/sulthan-bathery",
          },
          {
            text: "Rayagada",
            link: "https://www.swiggy.com/city/rayagada",
          },
          {
            text: "Paradeep",
            link: "https://www.swiggy.com/city/paradeep",
          },
          {
            text: "Mandapeta",
            link: "https://www.swiggy.com/city/mandapeta",
          },
          {
            text: "Jamui",
            link: "https://www.swiggy.com/city/jamui",
          },
          {
            text: "Pilkhuwa",
            link: "https://www.swiggy.com/city/pilkhuwa",
          },
          {
            text: "Parvathipuram",
            link: "https://www.swiggy.com/city/parvathipuram",
          },
          {
            text: "Ambajogai",
            link: "https://www.swiggy.com/city/ambajogai",
          },
          {
            text: "Araria",
            link: "https://www.swiggy.com/city/araria",
          },
          {
            text: "North Lakhimpur",
            link: "https://www.swiggy.com/city/north-lakhimpur",
          },
          {
            text: "Rajampet",
            link: "https://www.swiggy.com/city/rajampet",
          },
          {
            text: "Udumalaipettai",
            link: "https://www.swiggy.com/city/udumalaipettai",
          },
          {
            text: "Tirupattur",
            link: "https://www.swiggy.com/city/tirupattur",
          },
          {
            text: "Hojai",
            link: "https://www.swiggy.com/city/hojai",
          },
          {
            text: "Khagaria",
            link: "https://www.swiggy.com/city/khagaria",
          },
          {
            text: "Dasuya",
            link: "https://www.swiggy.com/city/dasuya",
          },
          {
            text: "Gudur",
            link: "https://www.swiggy.com/city/gudur",
          },
          {
            text: "Sullurpeta",
            link: "https://www.swiggy.com/city/sullurpeta",
          },
          {
            text: "Piler",
            link: "https://www.swiggy.com/city/piler",
          },
          {
            text: "SankaranKoil",
            link: "https://www.swiggy.com/city/sankarankoil",
          },
          {
            text: "Nabha",
            link: "https://www.swiggy.com/city/nabha",
          },
          {
            text: "LPU - Phagwara",
            link: "https://www.swiggy.com/city/lpu-phagwara",
          },
          {
            text: "Jangipur",
            link: "https://www.swiggy.com/city/jangipur",
          },
          {
            text: "Roha",
            link: "https://www.swiggy.com/city/roha",
          },
        ],
        id: "footer_content",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
        citySlug: "pune",
        lat: "18.61610",
        lng: "73.72860",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        gandalfRequest:
          '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-4794a3f0-f29c-4e95-9a64-ea7967786a5a","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE"}}',
        id: "meta_data",
        metaInfo: {
          pageType: "FOOD_HOME_PAGE",
          pageTitle:
            "Order Food Online from India's Best Food Delivery Service | Swiggy",
          pageMetaDescription:
            "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
          pageKeywords:
            "Food delivery, Online food order, Online food dleivery",
        },
        screenType: "filteredCollection",
        seoParams: {
          apiName: "FoodHomePage",
          seoUrl: "www.swiggy.com",
          pageType: "FOOD_HOME_PAGE",
        },
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
        <input className="name" placeholder="search food"></input>
      </div>
      <div className="res-Container">
        <RestaurantCard
          resName="Meghana Foods"
          Cuisines="Biriyani, North India, Asian"
        />
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resObj />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div class="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
