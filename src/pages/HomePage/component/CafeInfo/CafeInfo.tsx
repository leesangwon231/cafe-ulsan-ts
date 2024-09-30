import "./CafeInfo.css"
import 'aos/dist/aos.css';
const CafeInfo = () => {

  return (
    <div className={"cafe_Info"}>
        <div className={"cafe_info_img_area"}>
            <img alt={"cafe_info_img"} data-aos="fade-in" data-aos-delay={300} src={"https://mblogthumb-phinf.pstatic.net/MjAyMzAzMThfODIg/MDAxNjc5MTQ5NzU5MzQ4.VA7UFnltCUSD--mwGMhxScnJX5WiIo6gue0micYv6csg.TYTd1ZHLxw4RhA8f-SXtv9Dn_wEv9VlK8HguFKeYA8Eg.JPEG.winnie_-_pooh/1679148901889.jpg?type=w800"}/>
        </div>
        <div className={"cafe_Info_Detail"}>
            <h3>
                <p data-aos="fade-in" data-aos-delay={300}>酌</p>
                <p data-aos="fade-in" data-aos-delay={400}>掛</p>
                <p data-aos="fade-in" data-aos-delay={500}>園</p>
                <p data-aos="fade-in" data-aos-delay={600}>林</p>
            </h3>
            <h1 className={"Info"}>
                <p data-aos="fade-in" data-aos-delay={300}>자연 속에 술잔을 걸며,</p>
                <p data-aos="fade-in" data-aos-delay={400}>여유를 담는 작괘 원림 입니다.</p>
            </h1>
        </div>
    </div>
  );
}

export default CafeInfo;