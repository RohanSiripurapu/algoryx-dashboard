// Stats data for the 4 dashboard cards
export const statsData = [
  { 
    id: 1, 
    title: "Total Revenue", 
    value: "$45,231", 
    change: "+12.5%", 
    isPositive: true,
    iconName: "DollarSign" 
  },
  { 
    id: 2, 
    title: "Active Users", 
    value: "2,340", 
    change: "+5.2%", 
    isPositive: true,
    iconName: "Users" 
  },
  { 
    id: 3, 
    title: "Total Orders", 
    value: "1,205", 
    change: "-2.1%", 
    isPositive: false,
    iconName: "ShoppingCart" 
  },
  { 
    id: 4, 
    title: "Conversion Rate", 
    value: "3.2%", 
    change: "+1.1%", 
    isPositive: true,
    iconName: "Activity" 
  },
];

// Recent orders for the table
export const recentOrders = [
  { id: "#ORD-001", customer: "John Doe", email: "john@example.com", date: "2026-10-01", amount: "$120.00", status: "Completed" },
  { id: "#ORD-002", customer: "Jane Smith", email: "jane@example.com", date: "2026-10-02", amount: "$450.00", status: "Pending" },
  { id: "#ORD-003", customer: "Mike Johnson", email: "mike@example.com", date: "2026-10-03", amount: "$89.00", status: "Completed" },
  { id: "#ORD-004", customer: "Sarah Williams", email: "sarah@example.com", date: "2026-10-04", amount: "$1,200.00", status: "Failed" },
  { id: "#ORD-005", customer: "Chris Brown", email: "chris@example.com", date: "2026-10-05", amount: "$320.00", status: "Completed" },
  { id: "#ORD-006", customer: "Emily Davis", email: "emily@example.com", date: "2026-10-06", amount: "$540.00", status: "Pending" },
];

// User profile data
export const userProfile = {
  name: "Rohan Sharma",
  role: "Frontend Intern",
  email: "rohan@algoryx.in",
  avatar: "https://ui-avatars.com/api/?name=Rohan+Sharma&background=2563eb&color=fff&size=128",
};

// Notifications data
export const notifications = [
  { id: 1, text: "New order received", time: "2 min ago", unread: true },
  { id: 2, text: "User Jane signed up", time: "1 hour ago", unread: true },
  { id: 3, text: "Server deployment complete", time: "3 hours ago", unread: false },
  { id: 4, text: "Weekly report is ready", time: "1 day ago", unread: false },
];