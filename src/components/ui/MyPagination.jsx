import styles from "./MyPagination.module.scss";
import lodash from "lodash";
import Pagination from "react-bootstrap/Pagination";

const MyPagination = (itemsCount, pageSize) => {
  //根据 item 总数 除 每页多少   算出  需要多少页
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //用 lodash.range 生成起始页 到 结束页
  const pages = lodash.range(1, pagesCount + 1);
  console.log(pages);

  // CONDITIONAL LOAD: Items < items per page 如果不够一页，不需要显示pagination
  if (pagesCount === 1) {
    return null;
  }

  return (
    <>
      <nav className="mb-4" aria-label="user pageination">
        <Pagination className="justify-content-center">
          {pages.map((page) => (
            <Pagination.Item key={page} onClick={() => onPageChange(page)}>
              <span>{page}</span>
            </Pagination.Item>
          ))}
        </Pagination>
      </nav>
    </>
  );
};

export default MyPagination;
