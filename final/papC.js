class PAP {
  constructor(activityType, activityHour, feedback) {
    this.activityType = activityType;
    this.activityHour = activityHour;
    this.feedback = feedback;
    this.prodActivPoints();
    this.prodActivHrPoints();
    this.proTotal();
  }
  prodActivPoints() {
    if (
      this.activityType === "Scrolling social media" ||
      this.activityType === "Video games"
    ) {
      this.prodActivPoints = 2;
    } else if (
      this.activityType === "Writing" ||
      this.activityType === "Online reading"
    ) {
      this.prodActivPoints = 6;
    }
  }
  prodActivHrPoints() {
    if (this.activityHour === 1) {
      this.prodActivHrPoints = 3;
    } else if (this.activityHour === 2) {
      this.prodActivHrPoints = 6;
    } else if (this.activityHour === 3) {
      this.prodActivHrPoints = 9;
    } else if (this.activityHour === 4) {
      this.prodActivHrPoints = 12;
    } else if (this.activityHour === 5) {
      this.prodActivHrPoints = 15;
    } else if (this.activityHour === 6) {
      this.prodActivHrPoints = 18;
    } else if (this.activityHour === 7) {
      this.prodActivHrPoints = 21;
    }
  }

  proTotal() {
    this.total = this.prodActivPoints + this.prodActivHrPoints;

    if (this.total >= 15) {
      this.feedback = "Good job being productive!";
    } else if (this.total < 15) {
      this.feedback = "Maybe do other productive activities.";
    }
  }
}

export { PAP };
