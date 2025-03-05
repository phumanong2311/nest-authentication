
import { DeviceType } from "src/types";
import { userAgent } from "../../types";

function getDevice(userAgent: userAgent) {
  switch (true) {
    case userAgent.isMobile:
      return DeviceType.Mobile;
    case userAgent.isTablet:
      return DeviceType.Tablet;
    case userAgent.isDesktop:
      return DeviceType.Desktop;
    case userAgent.isiPad || userAgent.isiPod || userAgent.isiPhone:
      return DeviceType.AppleDevice;
    case userAgent.isAndroid:
      return DeviceType.AndroidDevice;
    case userAgent.isWindows:
      return DeviceType.WindowsDevice;
    case userAgent.isLinux:
      return DeviceType.LinuxDevice;
    case userAgent.isMac:
      return DeviceType.MacDevice;
    default:
      return DeviceType.UnknownDevice;
  }
}

export default getDevice;
