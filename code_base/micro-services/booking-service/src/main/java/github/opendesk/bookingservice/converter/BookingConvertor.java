package github.opendesk.bookingservice.converter;

import github.opendesk.bookingservice.dao.BookingDao;
import github.opendesk.bookingservice.model.BookingModel;

import java.util.function.Function;

public class BookingConvertor {

    public static Function<BookingDao, BookingModel> bookingDaoToBookingModel
            = new Function<BookingDao, BookingModel>() {

        public BookingModel apply(BookingDao bookingDao) {
            BookingModel bookingModel = BookingModel.builder()
                    .userId(bookingDao.getUserId())
                    .siteId(bookingDao.getSiteId())
                    .bookingDate(bookingDao.getBookingDate())
                    .bookingId(bookingDao.getBookingId())
                    .bookingTime(bookingDao.getBookingTime())
                    .floorId(bookingDao.getFloorId())
                    .orgId(bookingDao.getOrgId())
                    .build();
             return bookingModel;
        }
    };

    public static Function<BookingModel, BookingDao> bookingModelToBookingDao
            = new Function<BookingModel, BookingDao>() {

        public  BookingDao apply( BookingModel  bookingModel) {
           BookingDao bookingDao = BookingDao.builder()
                   .userId(bookingModel.getUserId())
                   .siteId(bookingModel.getSiteId())
                   .bookingDate(bookingModel.getBookingDate())
                   .bookingId(bookingModel.getBookingId())
                   .bookingTime(bookingModel.getBookingTime())
                   .floorId(bookingModel.getFloorId())
                   .orgId(bookingModel.getFloorId()).build();
            return bookingDao;
        }
    };
}
