import axios from "axios";

export default {
  async searchItem(_, payload) {
    const response = await axios.get(
      `/api/item?${payload.search ? `search=${payload.search}` : ""}${
        payload.option && payload.time && payload.date
          ? `&filter=itemtype:${payload.option},bookingdate:${payload.date},bookingtime:${payload.time}`
          : payload.option && payload.date
          ? `&filter=itemtype:${payload.option},bookingdate:${payload.date}`
          : payload.option && payload.time
          ? `&filter=itemtype:${payload.option},bookingdate:${payload.time}`
          : payload.option
          ? `&filter=itemtype:${payload.option}`
          : ""
      }`
    );
    console.log(response);
  },
};
