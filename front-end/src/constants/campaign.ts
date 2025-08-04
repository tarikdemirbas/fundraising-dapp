export interface Campaign {
  title: string;
  description: string;
  goalUSD: number;
  durationDays: number;
  beneficiary: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  metadata: {
    registrationEnabled: boolean;
    scheduleEnabled: boolean;
    sponsorGallery: boolean;
  };
}

export const campaign: Campaign = {
  title: "Build Our Community Soccer Field",
  description: "Join us in creating a state-of-the-art soccer field that brings together local youth, promotes healthy living, and strengthens community spirit.",
  goalUSD: 20000,
  durationDays: 60,
  beneficiary: "Youth Soccer Association",
  theme: {
    primaryColor: "#28a745", 
    secondaryColor: "#ffffff" 
  },
  metadata: {
    registrationEnabled: true,
    scheduleEnabled: true,
    sponsorGallery: true
  }
};