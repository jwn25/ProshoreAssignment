
import Vue from "vue";
import moment from "moment";

Vue.filter("date_format", function(date, type = "YYYY-MM-DD") {
  let moment_time = moment(date);
  if (type === "timeago") return moment_time.fromNow();
  if (type === "calendar") return moment_time.calendar();
  return moment_time.format(type);
});
