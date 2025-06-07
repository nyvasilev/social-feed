import { useState, useEffect, useRef } from "react";
import Logo from "/logo.png";
import { UserMiniProfile } from "../UserMiniProfile/UserMiniProfile";
import { headerContainer, headerLogo, userProfileButton } from "./styles";
import { useStore, useActions } from "../../store/store";

export const Header = () => {
  const [miniProfile, setMiniProfile] = useState(false);
  const profileBtnRef = useRef(null);
  const popoverRef = useRef(null);
  const { user } = useStore();

  useEffect(() => {
    useActions.fetchUser();
  }, []);

  useEffect(() => {
    if (!miniProfile) return;

    const onClickOutside = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        profileBtnRef.current &&
        !profileBtnRef.current.contains(e.target)
      )
        setMiniProfile((prev) => !prev);
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [miniProfile]);

  const toggleMiniProfile = () => setMiniProfile((prev) => !prev);

  return (
    <div css={headerContainer}>
      <img src={Logo} alt="logo" css={headerLogo} />
      <button
        ref={profileBtnRef}
        type="button"
        css={userProfileButton}
        onClick={toggleMiniProfile}
      >
        <i
          className={`fa-solid fa-angle-${miniProfile ? "up" : "down"} fa-chevron`}
        />
        <img src={user?.[0].avatar} className="user-image" />
      </button>
      {miniProfile && <UserMiniProfile ref={popoverRef} />}
    </div>
  );
};
