import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyEmailPage = () => {
  const { token } = useParams(); // Lấy token từ URL
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/auth/verify-email/${token}` // Backend endpoint
        );

        if (res.data.success) {
          toast.success("Email verified successfully! Redirecting to login...");
          setTimeout(() => navigate("/signin"), 3000); // Chuyển hướng về trang đăng nhập
        } else {
          toast.error(res.data.message || "Verification failed.");
        }
      } catch (error) {
        console.error("Verification error:", error.message);
        toast.error("Invalid or expired verification link.");
      } finally {
        setIsLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  if (isLoading) {
    return (
      <div className="text-center flex items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Verifying your email...</h2>
      </div>
    );
  }

  return null; // Trả về null nếu không cần hiển thị thêm nội dung
};

export default VerifyEmailPage;
