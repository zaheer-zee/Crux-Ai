import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Shield, Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
        return null;
    }

    const handleSignOut = async () => {
        await signOut();
        navigate("/");
    };

    const getInitials = (email: string) => {
        return email.substring(0, 2).toUpperCase();
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className="container max-w-4xl mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar / User Info Card */}
                <div className="w-full md:w-1/3 space-y-6">
                    <Card>
                        <CardHeader className="text-center">
                            <div className="mx-auto mb-4">
                                <Avatar className="h-24 w-24">
                                    <AvatarImage src={user.user_metadata?.avatar_url} />
                                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                                        {getInitials(user.email || "U")}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <CardTitle>{user.user_metadata?.full_name || "User"}</CardTitle>
                            <CardDescription>{user.email}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>Joined {formatDate(user.created_at)}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Shield className="w-4 h-4" />
                                <span>{user.role === "authenticated" ? "Verified User" : "Guest"}</span>
                            </div>
                            <Button variant="destructive" className="w-full mt-4" onClick={handleSignOut}>
                                <LogOut className="w-4 h-4 mr-2" />
                                Sign Out
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Area */}
                <div className="w-full md:w-2/3">
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                        </TabsList>

                        <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account Information</CardTitle>
                                    <CardDescription>
                                        View and manage your account details.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                value={user.email}
                                                disabled
                                                className="pl-9"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="uid">User ID</Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="uid"
                                                value={user.id}
                                                disabled
                                                className="pl-9 font-mono text-xs"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="settings">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Preferences</CardTitle>
                                    <CardDescription>
                                        Manage your application preferences.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Settings functionality coming soon...
                                    </p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Profile;
